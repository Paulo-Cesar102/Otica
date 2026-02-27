import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import githubIcon from "../../assents/github.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

  
        <div className={styles.brand}>
          <h2 className={styles.logo}>Ótica Vida</h2>
          <p className={styles.copy}>
            © 2026 Ótica Vida. Todos os direitos reservados.
          </p>
        </div>

    
        <div className={styles.contact}>

          <Link 
            href="https://github.com/Paulo-Cesar102" 
            target="_blank"
            className={styles.contactItem}
          >
            <Image src={githubIcon} alt="GitHub" width={20} height={20} />
            <span>GitHub</span>
          </Link>

          <span className={styles.contactItem}>
            Gmail: paulo@gmail.com
          </span>

          <span className={styles.contactItem}>
            Telefone: (11) 9999-9999
          </span>

        </div>

      </div>
    </footer>
  );
}