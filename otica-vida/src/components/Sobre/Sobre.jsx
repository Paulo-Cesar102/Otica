import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Sobre Nós</h2>

        <p className={styles.texto}>
          A Ótica Vida nasceu com o propósito de oferecer qualidade,
          conforto e estilo para todos os tipos de visão. Trabalhamos com
          armações modernas, lentes de alta precisão e atendimento
          especializado para garantir a melhor experiência aos nossos clientes.
        </p>

        <p className={styles.texto}>
          Nosso compromisso é unir tecnologia, elegância e acessibilidade,
          proporcionando produtos que cuidam da sua saúde visual sem abrir
          mão do design.
        </p>
      </div>
    </section>
  );
}