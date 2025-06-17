'use client';

import { IconMediaLink } from 'jacm-library';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/Instagram.png';
import linkedin from '../assets/images/linkedin.png';
import gmail from '../assets/images/gmail.png';
import styles from './page.module.css';
import WhatsAppContactForm from '@/components/WhatsAppContactForm/WhatsAppContactForm';

const Contact: React.FC = () => {
  return (
    <section className={styles.containerGen}>
      <div className={styles.formContainer}>
        <WhatsAppContactForm />
      </div>
      <div className={styles.socialContainer}>
        <div
          onClick={() => {
            navigator.clipboard.writeText('jonyacolin@gmail.com');
            alert('Correo copiado al portapapeles');
          }}
          style={{ cursor: 'pointer' }}
        >
          <IconMediaLink
            icon={gmail.src}
            url="#"
            altText="Gmail"
            name="Gmail"
          />
        </div>

        <IconMediaLink
          icon={facebook.src}
          url="https://www.facebook.com/"
          altText="Facebook"
          name="Facebook"
        />
        <IconMediaLink
          icon={instagram.src}
          url="https://www.instagram.com/jonathancolin32/"
          altText="Instagram"
          name="Instagram"
        />
        <IconMediaLink
          icon={linkedin.src}
          url="https://www.linkedin.com/in/jonathan-alejandro-colin-medina-53904b1a5/"
          altText="LinkedIn"
          name="Linkedin"
        />
      </div>
    </section>
  );
};

export default Contact;
