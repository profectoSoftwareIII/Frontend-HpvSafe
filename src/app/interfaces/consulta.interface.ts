export interface Paciente {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  edad: string;
  telefono: string;
  email: string;
  consultas: Consulta[];
  id_medico: 1;
}

export interface Consulta {
  id: number;
  nombre_diagnostico: string;
  descripcion: string;
  fecha: string;
  medico: Medico;
  tratamiento: string;
}

export interface Medico {
  id: number;
  tarjeta_profesional: string;
  especialidad: string;
  nombre: string;
  apellido: string;
  cedula: string;
  edad: string;
  telefono: string;
  email: string;
}
