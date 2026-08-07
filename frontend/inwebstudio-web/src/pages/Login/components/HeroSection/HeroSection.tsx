import Logo from '@/components/layout/Logo';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return(
        <div className={styles.heroSectionContainer}>
            <div className={styles.heroSectionContent}>
                <Logo className={styles.heroSectionLogo} size='lg'></Logo>
                <h1>Gerencie sua agência com mais <span>eficiência</span></h1>
                <p>Organize projetos, clientes e operações em um único lugar.</p>
            </div>
        </div>
    )
}