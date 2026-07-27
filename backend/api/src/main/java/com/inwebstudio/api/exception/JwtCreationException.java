package com.inwebstudio.api.exception;

public class JwtCreationException extends RuntimeException {
    public JwtCreationException(String message) {
        super(message);
    }
}
