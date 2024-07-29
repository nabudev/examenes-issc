"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from 'react';
import {getAllMaterias, getAllTecProf, getAllAnioCarrera, createInscripcion} from '@/api/api.js';
import { useForm } from "react-hook-form";

export function Registro() {
  const [materias, setMaterias] = useState([]);
  const [tecprof, setTecProf] = useState([]);
  const [aniosCarrera, setAniosCarrera] = useState([]);
  const {register, handleSubmit} = useForm();

  const onSubmit= handleSubmit(async data => {
    const res= await createInscripcion(data)
    console.log(res)
  })

  useEffect(() => {
    async function loadMaterias(){
      const res= await getAllMaterias();
      setMaterias(res.data);
    }
    loadMaterias();
  }, []);

  useEffect(() => {
    async function loadTecProf() {
      const res = await getAllTecProf();
      setTecProf(res.data);
    }
    loadTecProf();
  }, []);

  useEffect(() => {
    async function loadAnioCarrera() {
      const res = await getAllAnioCarrera();
      setAniosCarrera(res.data);
    }
    loadAnioCarrera();
  }, []);

  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            Instituto Superior San Cristobal
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Calendario de examenes
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Mis Registros
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <section className="py-8 px-6">
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
              <h2 className="text-2xl font-bold mb-4">Registrarse para un Examen</h2>
              <form className="bg-card p-4 rounded-md shadow-sm" onSubmit={onSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI</Label>
                    <Input 
                      id="dni"
                      placeholder="Ingresa tu DNI sin puntos ni espacios"
                      {...register("dni", {required: true})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Ingresa tu apellido"
                      {...register("lastName", {required: true})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Ingresa tu nombre"
                      {...register("firstName", {required: true})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="career">Carrera</Label>
                    <Select 
                      id="career"
                      {...register("career", {required: true})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar carrera"/>
                      </SelectTrigger>
                      <SelectContent>
                        {tecprof.map((tecprof) => (
                          <SelectItem key={tecprof.id} value={tecprof.nombre}>
                            {tecprof.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject">Materia</Label>
                    <Select 
                      id="subject"
                      {...register("subject", {required: true})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar asignatura" />
                      </SelectTrigger>
                      <SelectContent>
                        {materias.map((materia) => (
                          <SelectItem key={materia.id} value={materia.nombre}>
                            {materia.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="year">Año</Label>
                    <Select 
                      id="year"
                      {...register("year", {required: true})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar año" />
                      </SelectTrigger>
                      <SelectContent>
                        {aniosCarrera.map((anio) => (
                          <SelectItem key={anio.id} value={anio.anio}>
                            {anio.anio}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="examDate">Fecha de Examen</Label>
                    <Input 
                      id="examDate" 
                      type="date"
                      {...register("examDate", {required: true})}
                    />
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