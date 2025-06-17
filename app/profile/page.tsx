import React from "react";
import styles from "./page.module.css";

export interface MenuItem {
  label: string;
  url?: string;
  children?: MenuItem[];
}
const Profile: React.FC = () => {
  return (
    <>
      <div className={styles.containerGen}>
        <h2 className={styles.heading}>
          Hola, soy Jonathan Alejandro Colin Medina 👋
        </h2>

        <p className={styles.paragraph}>
          Soy desarrollador Full Stack apasionado por la construcción de
          interfaces intuitivas, eficientes y sostenibles. Tengo experiencia en
          React.js, Vue, Java y otras tecnologías enfocadas al desarrollo
          frontend y backend. Mi objetivo es crear soluciones que impacten
          positivamente en el negocio y la experiencia del usuario.
        </p>

        <p className={styles.paragraph}>
          Cuento con experiencia en el diseño, construcción y consumo de API
          REST, así como en la implementación de microservicios y buenas
          prácticas de DevOps, así como la implementación de pruebas unitarias y de integración.
        </p>

        <p className={styles.highlight}>
          Esta página está construida con <strong>Next.js</strong> (React) y
          utiliza una <strong>librería propia de componentes (Aún se está trabajando en el proyecto)</strong> que he
          desarrollado para uso personal y profesional. Puedes consultar la
          documentación de la librería creada con <strong>Storybook</strong> en
          el siguiente enlace:
        </p>

        <a
          href="https://jonathan1612.github.io/jacm-doc/?path=/docs/components-avatar--docs"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver documentación de la librería
        </a>
      </div>
    </>
  );
};

export default Profile;
