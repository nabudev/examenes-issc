"use client";
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from "react";

export function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
      // Aquí puedes agregar la lógica de autenticación

      // Después de un login exitoso, redirige a la página principal
    router.push('/home');  // Esto redirige a la página principal
  };

  return (
    (<div
      className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src="img\logoissc.jpg"
            alt="Company Logo"
            width={100}
            height={100}
            className="h-12"
            style={{ aspectRatio: "100/100", objectFit: "cover" }} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <Label htmlFor="dni">DNI</Label>
            <Input
              id="dni"
              type="text"
              placeholder="Ingresa tu DNI"
              className="w-full"
              required />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              className="w-full"
              required />
          </div>
          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>)
  );
}
