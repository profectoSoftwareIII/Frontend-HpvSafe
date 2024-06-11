export class Recordatorio{
    paciente_id: number | undefined;
    medico_id: number | undefined;
    tipo_recordatorio: string | undefined;
    descripcion: string | undefined;
    fecha: Date | undefined;
}

export class RegistroPaciente{
    doctor_id: number | undefined;
    nombre: string | undefined;
    apellido: string | undefined;
    cedula: string | undefined;
    edad: number | undefined;
    telefono: string | undefined;
    email: string | undefined;
    tipo_hpv: string | undefined;
}