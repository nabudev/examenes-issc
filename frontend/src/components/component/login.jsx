"use client";
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from "react";

export function Login() {
  const router = useRouter();
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:8000/autenticacion/login/', {
              dni: dni,
              password: password
          });
          localStorage.setItem('token', response.data.token);
          // Redirige a la página principal después del login exitoso
          router.push('/home');
      } catch (error) {
          console.error("Login failed:", error.response.data);
      }
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
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default Login;