"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from 'react';
import {getAllMesas, createInscripcion} from '@/api/api.js';
import { useForm } from "react-hook-form";
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export function Registro() {
  const [mesas, setMesas] = useState([]);
  const {register, handleSubmit} = useForm();
  const router = useRouter();

  const onSubmit= handleSubmit(async data => {
    const accepted= window.confirm('Confirmar inscripción')
    if (accepted) {
      try {
        const response = await createInscripcion(data);
        
        if (response.status === 201) {
          toast.success('Inscripción realizada con éxito');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Error al realizar la inscripción");
        }
      } catch (error) {
        // Manejo de errores específicos
        if (error.response && error.response.status === 400) {
          toast.error("Ya estás inscripto a esta mesa de examen");
        } else {
          toast.error("Ocurrió un error al realizar la inscripción");
        }
      }
    }
  });

  const handleLogout = () => {
      // Elimina el token de autenticación
    localStorage.removeItem('token');
  
      // Redirige al usuario a la página de inicio de sesión
    router.push('/');
  };

  useEffect(() => {
    async function loadMesas(){
      const res= await getAllMesas();
      setMesas(res.data);
    }
    loadMesas();
  }, []);

  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
          Instituto Superior San Cristobal - Inscripción de exámenes finales
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#mi-calendario" className="hover:underline" prefetch={false}>
              Calendario
            </Link>
            <Link href="#mi-registro" className="hover:underline" prefetch={false}>
              Mis Registros
            </Link>
            <button className="hover:underline" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <section className="py-8 px-6">
          <img src="img\logoissc.jpg" alt="logo" className="d-block mx-auto w-1/2 max-w-xs"/>
          <br />
          <br />
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
            <div>
            <h2 className="text-xl font-bold mb-4">Información de los Exámenes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold">Fechas y Horarios</h3>
                <p>Los exámenes finales se llevarán a cabo del 15 al 20 de junio.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Requisitos</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Presentarse con libreta (sin excepciónes).</li>
                  <li>Vestir ropa adecuada.</li>
                  <li>Para dar de baja una inscripción se la deberá solicitar 48hs antes del exámen.</li>
                  <li>Ausentes sin justificativos pertinentes presentados en tiempo y forma equivale a un aplazo.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">Contacto</h3>
                <p>Para más información, comunícate con Administración al correo correodelinstituto@email.com</p>
              </div>
            </div>
          </div>
        </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Registrarse para un examen</h2>
              <form className="bg-card p-4 rounded-md shadow-sm" onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI</Label>
                    <Input 
                      id="dni"
                      placeholder="Ingrese su DNI sin puntos ni espacios"
                      {...register("dni", {required: true})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Apellido y Nombre</Label>
                    <Input 
                      placeholder="Ingrese su nombre completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mesa">Selecciona una mesa de examen</Label>
                    <select
                      className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      {...register("mesa", { required: true })}>
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        {mesas.map((mesa) => (
                          <option key={mesa.id} value={mesa.id}>
                            {mesa.materia.nombre}- {mesa.llamado.fecha} - {mesa.llamado.hora}
                          </option>
                          ))}
                    </select>
                  </div>
                </div>
                <Button type="submit" className="mt-4 w-full">
                  Registrarse
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}

export default Registro;