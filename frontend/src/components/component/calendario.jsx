"use client";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import React, { useState, useEffect } from 'react';
import {getAllMesas} from '@/api/api.js';

export function Calendario() {

  const [mesas, setMesas] = useState([]);
  

  useEffect(() => {
    async function loadMesas() {
      const res = await getAllMesas();
      setMesas(res.data);
    }
    loadMesas();
  }, []);

  const formatTime = (timeString) => {
    return timeString.slice(0, 5); // Devuelve los primeros 5 caracteres, por ejemplo, "14:00"
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`; // Devuelve la fecha en formato "DD-MM-YYYY"
  };

  return (
    <section id= "mi-calendario" className="py-8 px-6 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Calendario de Exámenes</h2>
            <div className="bg-card p-4 rounded-md shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Materia</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Hora</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mesas.map((mesa) => (
                    <TableRow key={mesa.id}>
                      <TableCell>{mesa.materia.nombre}</TableCell>
                      <TableCell>{formatDate(mesa.llamado.fecha)}</TableCell>
                      <TableCell>{formatTime(mesa.llamado.hora)}</TableCell>
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

export default Calendario;