"use client";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import {getAllInscripciones, deleteInscripcion, updateInscripcion, getAllMesas} from '@/api/api.js';
import {toast} from 'react-hot-toast';
import Swal from 'sweetalert2';
Modal.setAppElement('#__next'); // Ajusta según tu estructura

export function MisRegistros() {
  const [inscripciones, setInscripciones] = useState([]);
  const [mesas, setMesas] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedInscripcion, setSelectedInscripcion] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    async function loadInscripciones(){
      const res= await getAllInscripciones();
      setInscripciones(res.data);
    }
    loadInscripciones();
  }, []);

  useEffect(() => {
    async function loadMesas(){
      const res= await getAllMesas();
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

  const handleDelete = (id) => {
    deleteInscripcion(id)
        setInscripciones(prevInscripciones => 
          prevInscripciones.filter(inscripcion => inscripcion.id !== id)
        );
        toast.success('Inscripción eliminada')
  };

  const openModal = (inscripcion) => {
    setSelectedInscripcion(inscripcion);
    reset({
      dni: inscripcion.dni,
      mesa: inscripcion.mesa,
    });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedInscripcion(null);
  };

  const onSubmit = async (data) => {
    if (selectedInscripcion) {
      const result = await Swal.fire({
        title: '¿Desea modificar su inscripción?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, modificar',
        cancelButtonText: 'Cancelar',
      });
  
      if (result.isConfirmed) {
        try {
          const response = await updateInscripcion(selectedInscripcion.id, data);
  
          if (response.status === 200) {
            toast.success('Inscripción modificada con éxito');
            setInscripciones((prevInscripciones) =>
              prevInscripciones.map((inscripcion) =>
                inscripcion.id === selectedInscripcion.id ? { ...inscripcion, ...data } : inscripcion
              )
            );
            closeModal();
            window.location.reload();
          } else {
            toast.error('Error al modificar la inscripción');
          }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            toast.error('Ya estás inscripto a esta mesa de examen');
          } else {
            toast.error('Ocurrió un error al modificar la inscripción.');
          }
        }
      }
    }
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
                      <Button variant="outline" onClick={() => openModal(inscripcion)}>Modificar</Button>
                      <Button
                            variant="outline"
                            onClick={async () => {
                              const result = await Swal.fire({
                                title: 'Usted está por borrarse de una mesa. ¿Desea continuar?',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Sí, borrar',
                                cancelButtonText: 'Cancelar',
                              });

                              if (result.isConfirmed) {
                                await handleDelete(inscripcion.id);
                              }
                            }}
                          >
                            Eliminar
                      </Button>
                        
                      </TableCell>
                      <TableCell>
                      <div className="bg-green-500 text-green-50 px-2 py-1 rounded-md text-sm">{inscripcion.estado}</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

        </Table>
      </div>
    </div>
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="fixed inset-0 flex items-center justify-center z-50" overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="bg-white rounded-md p-6 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Actualizar Inscripción</h2>
        <form className="bg-card p-4 rounded-md shadow-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dni">DNI</Label>
              <Input
                id="dni"
                placeholder="Ingresa tu DNI sin puntos ni espacios"
                {...register("dni", { required: true })}
              />
            </div>
            <div>
              <Label htmlFor="mesa">Selecciona una Mesa</Label>
              <select
                id="mesa"
                className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("mesa", { required: true })}
              >
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
          <Button type="submit" className="mt-4 w-1/2">
            Actualizar
          </Button>
          <Button type="button" onClick={closeModal} variant="outline" className="mt-4 w-1/2">
            Cancelar
          </Button>
        </form>
      </div>
      </Modal>
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