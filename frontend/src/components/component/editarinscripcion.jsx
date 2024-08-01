"use client";
import Modal from '@mui/material/Modal';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"



const Editar = ({ open, onClose, inscripcion, onSave }) => {
    const [formData, setFormData] = useState(inscripcion);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

  return (
    <Modal open={open} onClose={onClose}>
        (<div className="flex flex-col min-h-screen">
      
      <main className="flex-1 bg-background">
        <section className="py-8 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
           
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Editar Inscripción</h2>
              <form className="bg-card p-4 rounded-md shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI</Label>
                    <Input 
                      id="dni"
                      placeholder="Ingresa tu DNI sin puntos ni espacios"
                      {...register("dni", {required: true})}
                    />
                  </div>
                  <div>
                  </div>
                  <div>
                    <Label htmlFor="mesa">Selecciona una Mesa</Label>
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
    </Modal>
    
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

export default Editar;