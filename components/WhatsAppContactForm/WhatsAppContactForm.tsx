'use client';

import { useState } from 'react';
import Head from 'next/head';
import styles from './WhatsAppContactForm.module.css';

const WhatsAppContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const whatsappNumber = '524433067730';

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !message) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const encodedMessage = encodeURIComponent(`Hola, soy ${name}. ${message}`);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Head>
        <title>Contacto por WhatsApp</title>
        <meta name="description" content="Formulario para contactar por WhatsApp" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.heading}>Contáctame por WhatsApp</h1>
        <p className={styles.description}>
          Completa el formulario para enviarme un mensaje directamente a WhatsApp.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Tu Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Enviar Mensaje
          </button>
        </form>
      </main>
    </>
  );
};

export default WhatsAppContactForm;
