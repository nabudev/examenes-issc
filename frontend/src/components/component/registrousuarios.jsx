"use client";
import axios from 'axios';
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from "react";
import Link from "next/link"
import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast';

export function RegistroUsuarios() {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/autenticacion/register/', {
            dni: dni,
            password: password
        });
        if (response.status === 201) {
          toast.success('Usuario registrado con éxito')
          setTimeout(function() {
            router.push('/');  // Redirige al login o a la página principal
          }, 1500); 
        }
    } catch (error) {
        toast.error("El DNI ya está registrado o no corresponde a un alumno de la institución");
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
        <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
        <form className="space-y-4" onSubmit={handleRegister}>
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
              placeholder="Ingresa una contraseña"
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </div>
          <Button type="submit" className="w-full">
            Registrarme
          </Button>
          <div className="text-center text-muted-foreground">
            <Link href="/" className="underline" prefetch={false}>
              Volver a inicio de sesión
            </Link>
          </div>
        </form>
      </div>
    </div>)
  );
}

export default RegistroUsuarios;