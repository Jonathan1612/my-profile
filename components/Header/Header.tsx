import styles from "./Header.module.css";
import { Avatar, Tooltip, NavBar } from "jacm-library";
import perfil from "../../app/assets/images/perfil.jpg";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

const links = [
  { name: "", href: "/profile" },
  { name: "CV", href: "/resume" },
  { name: "Skills", href: "/skills" },
  { name: "Contacto", href: "/contact" },
];

const Header: React.FC = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.containerNav}>
        <NavBar
          avatar={
            <Tooltip text="Jonathan" position="bottom">
              <Avatar src={perfil.src} name="Jonathan" />
            </Tooltip>
          }
          title="Jonathan Alejandro Colin Medina"
          links={links}
          buttonEnd={<ThemeToggle />}
        />
      </div>
    </div>
  );
};

export default Header;
