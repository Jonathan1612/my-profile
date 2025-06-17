import { SkillList } from "jacm-library";
import styles from "./page.module.css";

const skills_Frameworks = [
  { icon: "/skills/react.png", name: "React.js", level: 85 },
  { icon: "/skills/ruby_on_rails.png", name: "Ruby on Rails", level: 50 },
  { icon: "/skills/vue.png", name: "Vue", level: 60 },
  { icon: "/skills/react_native.png", name: "React Native", level: 60 },
];

const skills_Language = [
  { icon: "/skills/javascript.png", name: "JavaScript", level: 90 },
  { icon: "/skills/typescript.png", name: "TypeScript", level: 80 },
  { icon: "/skills/python.png", name: "Python", level: 70 },
  { icon: "/skills/java.png", name: "Java", level: 70 },
  { icon: "/skills/ruby.png", name: "Ruby", level: 70 },
  { icon: "/skills/go.png", name: "Go", level: 40 },
];

const skills_DB = [
  { icon: "/skills/mysql.png", name: "MySql", level: 60 },
  { icon: "/skills/sql.png", name: "SQL", level: 60 },
  { icon: "/skills/mongodb.png", name: "MongoDB", level: 50 },
  { icon: "/skills/firebase.png", name: "Firebase", level: 40 },
];

const skills_Other = [
  { icon: "/skills/scraping.png", name: "Scraping", level: 50 },
  { icon: "/skills/docker.png", name: "Docker", level: 60 },
  { icon: "/skills/data.png", name: "Data", level: 70 },
];

const Skills: React.FC = () => {
  return (
    <section className={styles.skillsWrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Habilidades Técnicas</h1>
        <p>
          Mi experiencia se ha enfocado principalmente en el desarrollo
          frontend, con conocimientos complementarios en backend, análisis de
          datos y DevOps.
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Frameworks</h2>
          <SkillList skills={skills_Frameworks} />
        </div>
        <div className={styles.card}>
          <h2>Lenguajes</h2>
          <SkillList skills={skills_Language} />
        </div>
        <div className={styles.card}>
          <h2>Bases de Datos</h2>
          <SkillList skills={skills_DB} />
        </div>
        <div className={styles.card}>
          <h2>Otras áreas</h2>
          <SkillList skills={skills_Other} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
