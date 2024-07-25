import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
/**import React, { useState, useEffect } from 'react';
import {getAllAlumnos, getAllTecProf, getAllAnioCarrera, getAllCarreras, getAllMaterias, getAllLlamados, getAllMesas, getAllInscripciones} from '.../api/api';**/

export function MisRegistros() {
  return (
    <section className="py-8 px-6">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mis Registros</h2>
      <div className="bg-card p-4 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Materia</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Hora</TableHead>
              
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ingeniería de Software</TableCell>
              <TableCell>15 de mayo de 2023</TableCell>
              <TableCell>9:00 AM - 12:00 PM</TableCell>
              
              <TableCell>
                <div className="bg-green-500 text-green-50 px-2 py-1 rounded-md text-sm">Registrado</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Algoritmos y Estructuras de Datos</TableCell>
              <TableCell>5 de junio de 2023</TableCell>
              <TableCell>2:00 PM - 5:00 PM</TableCell>
              
              <TableCell>
                <div className="bg-yellow-500 text-yellow-50 px-2 py-1 rounded-md text-sm">Pendiente</div>
              </TableCell>
            </TableRow>
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