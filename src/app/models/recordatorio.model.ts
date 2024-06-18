export class Recordatorio {
  paciente_id: number | undefined;
  medico_id: number | undefined;
  tipo_recordatorio: string | undefined;
  descripcion: string | undefined;
  fecha: Date | undefined;
}

export class RegistroPaciente {
  constructor(
    public nombre: string,
    public apellido: string,
    public cedula: string,
    public edad: number,
    public telefono: string,
    public email: string,
    public genero: string,
    public doctor_id?: number,
    public tipo_hpv?: string
  ) {}
}
