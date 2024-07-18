/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/VKluWSMX2v6
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'
import { Chivo } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function Registro() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            Instituto Superior San Cristobal
          </Link>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <section className="py-8 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Próximos Exámenes</h2>
              <div className="bg-card p-4 rounded-md shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-medium">Ingeniería de Software</div>
                  <div className="text-muted-foreground text-sm">15 de mayo de 2023</div>
                </div>
                <p className="text-muted-foreground">9:00 AM - 12:00 PM, Salón 201</p>
                <Button variant="outline" className="mt-4">
                  Registrarse
                </Button>
              </div>
              <div className="bg-card p-4 rounded-md shadow-sm mt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-medium">Algoritmos y Estructuras de Datos</div>
                  <div className="text-muted-foreground text-sm">5 de junio de 2023</div>
                </div>
                <p className="text-muted-foreground">2:00 PM - 5:00 PM, Salón 301</p>
                <Button variant="outline" className="mt-4">
                  Registrarse
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Registrarse para un Examen</h2>
              <form className="bg-card p-4 rounded-md shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="career">Carrera</Label>
                    <Select id="career">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Ciencias de la Computación</SelectItem>
                        <SelectItem value="business-administration">Administración de Empresas</SelectItem>
                        <SelectItem value="civil-engineering">Ingeniería Civil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject">Asignatura</Label>
                    <Select id="subject">
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar asignatura" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-engineering">Ingeniería de Software</SelectItem>
                        <SelectItem value="algorithms">Algoritmos y Estructuras de Datos</SelectItem>
                        <SelectItem value="database-systems">Sistemas de Bases de Datos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="year">Año</Label>
                    <Select id="year">
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
                    <Label htmlFor="exam-date">Fecha de Examen</Label>
                    <Input id="exam-date" type="date" />
                  </div>
                </div>
                <Button type="submit" className="mt-4 w-full">
                  Registrarse
                </Button>
              </form>
            </div>
          </div>
        </section>
        <section className="py-8 px-6 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Calendario de Exámenes</h2>
            <div className="bg-card p-4 rounded-md shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar carrera" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="computer-science">Ciencias de la Computación</SelectItem>
                      <SelectItem value="business-administration">Administración de Empresas</SelectItem>
                      <SelectItem value="civil-engineering">Ingeniería Civil</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar asignatura" />
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
                    <TableHead>Asignatura</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Hora</TableHead>
                    <TableHead>Salón</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Ingeniería de Software</TableCell>
                    <TableCell>15 de mayo de 2023</TableCell>
                    <TableCell>9:00 AM - 12:00 PM</TableCell>
                    <TableCell>201</TableCell>
                    <TableCell>
                      <Button variant="outline">Registrarse</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Algoritmos y Estructuras de Datos</TableCell>
                    <TableCell>5 de junio de 2023</TableCell>
                    <TableCell>2:00 PM - 5:00 PM</TableCell>
                    <TableCell>301</TableCell>
                    <TableCell>
                      <Button variant="outline">Registrarse</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sistemas de Bases de Datos</TableCell>
                    <TableCell>10 de julio de 2023</TableCell>
                    <TableCell>10:00 AM - 1:00 PM</TableCell>
                    <TableCell>401</TableCell>
                    <TableCell>
                      <Button variant="outline">Registrarse</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Mis Registros</h2>
            <div className="bg-card p-4 rounded-md shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asignatura</TableHead>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Hora</TableHead>
                    <TableHead>Salón</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Ingeniería de Software</TableCell>
                    <TableCell>15 de mayo de 2023</TableCell>
                    <TableCell>9:00 AM - 12:00 PM</TableCell>
                    <TableCell>201</TableCell>
                    <TableCell>
                      <div className="bg-green-500 text-green-50 px-2 py-1 rounded-md text-sm">Registrado</div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Algoritmos y Estructuras de Datos</TableCell>
                    <TableCell>5 de junio de 2023</TableCell>
                    <TableCell>2:00 PM - 5:00 PM</TableCell>
                    <TableCell>301</TableCell>
                    <TableCell>
                      <div className="bg-yellow-500 text-yellow-50 px-2 py-1 rounded-md text-sm">Pendiente</div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto text-center text-sm">
          &copy; Plataforma Institucional San Cristobal. Todos los derechos reservados.
        </div>
      </footer>
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
