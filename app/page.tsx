"use client";
import Header from "@/components/Header/Header";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/profile");
  }, [router]);

  return (
    <>
      <Header />
      <ThemeToggle />
      <div style={{ padding: "1rem" }}>
        <h1>¡Bienvenido a mi perfil!</h1>
      </div>
    </>
  );
}
