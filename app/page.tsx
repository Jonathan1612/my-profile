'use client'
import Header from '@/components/Header/Header'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { redirect } from 'next/navigation';

export default function Home() {
   redirect('/profile');
  return (
    <>
      <Header />
      <ThemeToggle />
      <div style={{ padding: "1rem" }}>
        <h1>¡Bienvenido a mi perfil!</h1>
      </div>
    </>
  )
}
