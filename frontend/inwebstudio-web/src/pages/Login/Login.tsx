import HeroSection from "./components/HeroSection/HeroSection";
import LoginForm from "./components/LoginForm/LoginForm";
import styles from './Login.module.css';


export default function Login() {

  return (
    <div className={styles.login}>
      <HeroSection />
      <LoginForm />
    </div>
  );
}

