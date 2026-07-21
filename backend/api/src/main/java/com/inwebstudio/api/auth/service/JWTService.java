package com.inwebstudio.api.auth.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class JWTService {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private long expiration;


    // Esse método transforma a String do secret em uma chave que a biblioteca JWT consegue utilizar.
    // Cria a chave criptográfica usada para assinar o JWT.
    // Sem essa chave o token não pode ser criado nem validado.
    private Key getSigningKey() {
        // transforma uma string em um array de bytes
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        // retorna o array de bytes
        return Keys.hmacShaKeyFor(keyBytes);
    }
    // Esse método cria um JWT. Gera o token
    public String generateToken(UserDetails user) {
        //Começa a montar o token.
        return Jwts.builder()
                //email de login
                .subject(user.getUsername())
                // data de login
                .issuedAt(new Date())
                // expiração o acesso
                .expiration(new Date(System.currentTimeMillis() + expiration))
                //Assina o token.
                //Sem isso qualquer pessoa poderia modificar o conteúdo.
                .signWith(getSigningKey())
                // Transfoma tudo em uma string
                .compact();
    }

    //verifica a assinatura, lê o payload e retorna um obj json com email, data exp e data de criação
    private Claims extractAllClaims(String token) {

        return Jwts.parser()
                .verifyWith((SecretKey) getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    // Recebe uma string e uma função para evitar repetição de código
    public <T> T extractClaim(
            String token,
            Function<Claims, T> resolver) {

        Claims claims = extractAllClaims(token);

        return resolver.apply(claims);
    }

    // extrai a data de expiração para validação
    public Date extractExpiration(String token) {

        return extractClaim(
                token,
                Claims::getExpiration
        );
    }

    // Verifica se o token expirou
    private boolean isTokenExpired(String token) {

        return extractExpiration(token)
                .before(new Date());
    }

    // extrai o email para validação
    public String extractUsername(String token) {
        return extractClaim(
                token,
                Claims::getSubject
        );
    }

    // Verifica se o token ainda é válido
    public boolean isTokenValid(
            String token,
            UserDetails user) {

        String username = extractUsername(token);

        return username.equals(user.getUsername())
                && !isTokenExpired(token);
    }

}
