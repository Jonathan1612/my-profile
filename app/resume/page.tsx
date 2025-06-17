import { WorkExperienceList } from "jacm-library";
import styles from "./page.module.css";
const Resume: React.FC = () => {
  const experiencesInetum = [
    {
      company: "Inetum",
      vision:
        "Inetum es líder europeo en servicios digitales. El equipo de 28.000 consultores y especialistas de Inetum se esfuerza cada día por lograr un impacto digital para las empresas, las entidades del sector público y la sociedad. Las soluciones de Inetum tienen como objetivo contribuir al rendimiento y la innovación de sus clientes, así como al bien común. Presente en 19 países con una densa red de centros, Inetum se asocia con los principales fabricantes de software para afrontar los retos de la transformación digital desde la proximidad y flexibilidad. Impulsada por su ambición de crecimiento a escala, Inetum generará unas ventas de 2.500 millones de euros en 2023.",
      position: "Desarrollador full stack (Walmart)",
      startDate: "Mar 2024",
      endDate: "Present",
      activities:
        "Creación de una libreria de componentes, creación de nuevos componentes, mantenimiento y actualización de los mismos. Desarrollo de proyectos frond-end, con la implementaciond e la libreria generada.",
      proyects: [
        "Librería (Arquetipo)",
        "Backhoul",
        "Complemento Carta Porte",
        "Kalos",
        "My Sprint",
        "Portal Backhoul"
      ],
      languages: [
        "JavaScript",
        "TypeScript",
        "React",
        "Java",
        "Node",
        "CSS",
        "Tailwind",
      ],
    },
    {
      company: "Inetum",
      position: "Desarrollador full stack (Soriana)",
      startDate: "Dic 2023",
      endDate: "Mar 2024",
      activities: "Soporte nivel 2 de varios aplicativos",
      languages: ["Sql", "Python", "JavaScript"],
    },
    {
      company: "Inetum",
      position: "Desarrollador full stack (BBVA)",
      startDate: "May 2023",
      endDate: "Dic 2023",
      activities: "Proyecto front-end para la parte administrativa.",
      languages: ["Vue", "CSS", "JavaScript", "Boostrap"],
    },
    {
      company: "Inetum",
      position: "Desarrollador full stack data (HSBC)",
      startDate: "Jan 2022",
      endDate: "Oct 2023",
      activities:
        "Data warehouse, analisis y procesamiento de informacion. Migración de información",
      languages: ["Python", "bash", "shell", "Teradata", "Jenkis"],
    },

    {
      company: "Inetum",
      position: "Desarrollador full stack data (HSBC)",
      startDate: "Jan 2022",
      endDate: "Oct 2023",
      activities:
        "Data warehouse, analisis y procesamiento de informacion. Migración de información",
      languages: ["Python", "bash", "shell", "Teradata", "Jenkis"],
    },
  ];
  const experiencesConcredito = [
    {
      company: "Concredito",
      vision:
        "Somos una empresa 100% digital con 16 años de historia que con su exitoso modelo de negocio ha transformado la vida de miles de mujeres y hombres de todo México, que con nosotros ha encontrado una nueva manera de generar ingresos para ellos y sus familias. A través de nuestra enorme red de Empresarias y Empresarios llevamos microcréditos a las personas que más lo necesitan, en el momento en que lo necesitan.",
      position: "Desarrollador full stack",
      startDate: "Jul 2021",
      endDate: "Jul 2022",
      activities:
        "Mantenimiento y actualizacion de aplicaciones fornt y back. Cracion de microservicios y actualizacion de apis. Mantenimiento y actualizacion de aplicaciondes movil andriod (Lenguaje propio)",
      languages: [
        "JavaScript",
        "Java",
        "React",
        "Node",
        "Androir",
        "CSS",
        "Boostrap",
        "Lenguaje de la empresa",
      ],
    },
  ];
  const experiencesJescosolutions = [
    {
      company: "Jescosolutions",
      vision:
        "Jesco Solutions, S.A. de C.V. es una empresa mexicana fundada en2002, ubicada en Zapopan, Jalisco, que se dedica al desarrollo yaplicaciones de programas de computadora.",
      position: "Desarrollador full stack",
      startDate: "Jul 2020",
      endDate: "Jul 2021",
      activities:
        "Desarrollo, mantenimiento y migración de un sistemas web y consumo de servicios externos a la empresa, tales como moneygram, giromex.",
      languages: [
        "Ruby",
        "Rubi on Rails",
        "React",
        "Javascript",
        "MySql",
        "CSS",
      ],
    },
  ];
  const experiencesSetenal = [
    {
      company: "Setenal",
      vision:
        "Ser un agente de cambio, proporcionando a sus clientes herramientas que apoyen la toma de decisiones, con soluciones que preserven el futuro del planeta y que permitan una mayor solidez financiera, asegurando que en cualquier lugar se pueda contar con la información requerida para las actividades diarias.",
      position: "Desarrollador full stack",
      startDate: "Jan 2020",
      endDate: "Jul 2020",
      activities:
        "Desarrollar un algoritmo para el análisis y proyecciones de vida de los neumáticos.",
      languages: ["Python", "React", "MySql"],
    },
  ];

  const experiencesSedeco = [
    {
      company: "Sedeco",
      vision:
        "La Secretaría de Desarrollo Económico es la responsable de definir y coordinar la política económica de la Ciudad de México con el fin de que el crecimiento económico y el empleo estén sustentados en un marco de certeza jurídica normativa y regulatoria que facilite y fomente la competitividad, la innovación, la inversión y el desarrollo de las actividades económicas teniendo como centro el mejoramiento de la calidad de vida de los habitantes de la Ciudad de México.",
      position: "Desarrollador full stack",
      startDate: "Oct 2019",
      endDate: "Dic 2019",
      activities:
        "Diseño y desarrollo de frontend de la aplicación. App para la compra y seguimiento de pedidos solicitados a los mercados locales de la ciudad de Morelia.",
      languages: ["React", "AdobreXD", "Javascript"],
    },
  ];
  return (
    <div className={styles.containerGen}>
      <div className={styles.containerEnterprice}>
        <WorkExperienceList experiences={experiencesInetum} />
      </div>
      <div className={styles.containerEnterprice}>
        <WorkExperienceList experiences={experiencesConcredito} />
      </div>
      <div className={styles.containerEnterprice}>
        <WorkExperienceList experiences={experiencesJescosolutions} />
      </div>
      <div className={styles.containerEnterprice}>
        <WorkExperienceList experiences={experiencesSetenal} />
      </div>
      <div className={styles.containerEnterprice}>
        <WorkExperienceList experiences={experiencesSedeco} />
      </div>
    </div>
  );
};

export default Resume;
