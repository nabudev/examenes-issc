"use client";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import React, { useState, useEffect } from 'react';
import {getAllMesas, getAllLlamados, getAllMaterias} from '@/api/api.js';

export function Calendario() {

  const [mesas, setMesas] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [llamados, setLlamados] = useState([]);

  useEffect(() => {
    async function loadMesas() {
      const res = await getAllMesas();
      setMesas(res.data);
    }
    loadMesas();
  }, []);

  useEffect(() => {
    async function loadMaterias(){
      const res= await getAllMaterias();
      setMaterias(res.data);
    }
    loadMaterias();
  }, []);

  useEffect(() => {
    async function loadLlamados() {
      const res = await getAllLlamados();
      setLlamados(res.data);
    }
    loadLlamados();
  }, []);

  return (
    <section className="py-8 px-6 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Calendario de Exámenes</h2>
            <div className="bg-card p-4 rounded-md shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Carrera" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Ciencias de la Computación</SelectItem>
                      <SelectItem value="business-administration">Administración de Empresas</SelectItem>
                      <SelectItem value="civil-engineering">Ingeniería Civil</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Materia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-engineering">Ingeniería de Software</SelectItem>
                      <SelectItem value="algorithms">Algoritmos y Estructuras de Datos</SelectItem>
                      <SelectItem value="database-systems">Sistemas de Bases de Datos</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar año" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1er Año</SelectItem>
                      <SelectItem value="2">2do Año</SelectItem>
                      <SelectItem value="3">3er Año</SelectItem>
                      <SelectItem value="4">4to Año</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    placeholder="Buscar exámenes..."
                    className="bg-background text-foreground" />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Materia</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Hora</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    {materias.map((materias)=> (
                      <TableCell key={materias.id} value={materias.nombre}>
                        {materias.nombre}
                      </TableCell>
                    ))}
                      {llamados.map((llamados)=> (
                      <TableCell key={llamados.id} value={llamados.fecha}>
                        {llamados.fecha}
                      </TableCell>
                    ))}
                      {llamados.map((llamados)=> (
                      <TableCell key={llamados.id} value={llamados.hora}>
                        {llamados.hora}
                      </TableCell>
                    ))}
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