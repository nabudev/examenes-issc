"use client";
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import React, { useState, useEffect } from 'react';
import {getAllInscripciones} from '@/api/api.js';

export function MisRegistros() {

  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    async function loadInscripciones(){
      const res= await getAllInscripciones();
      setInscripciones(res.data);
    }
    loadInscripciones();
  }, []);

  const formatTime = (timeString) => {
    return timeString.slice(0, 5); // Devuelve los primeros 5 caracteres, por ejemplo, "14:00"
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`; // Devuelve la fecha en formato "DD-MM-YYYY"
  };

  return (
    <section id="mi-registro" className="py-8 px-6">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mis Registros</h2>
      <div className="bg-card p-4 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Materia</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Hora</TableHead>
              <TableHead>Acciones</TableHead>
              <TableHead>Solicitud</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
                  {inscripciones.map((inscripcion) => (
                    <TableRow key={inscripcion.id}>
                      <TableCell>{inscripcion.mesa.materia.nombre}</TableCell>
                      <TableCell>{formatDate(inscripcion.mesa.llamado.fecha)}</TableCell>
                      <TableCell>{formatTime(inscripcion.mesa.llamado.hora)}</TableCell>
                      <TableCell>
                      <Button variant="outline">Modificar</Button>
                      <Button variant="outline">Eliminar</Button>
                      </TableCell>
                      <TableCell>
                      <div className="bg-green-500 text-green-50 px-2 py-1 rounded-md text-sm">Aprobada</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
        </Table>
      </div>
    </div>
  </section>
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