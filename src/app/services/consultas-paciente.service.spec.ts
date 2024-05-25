import { TestBed } from '@angular/core/testing';

import { ConsultasPacienteService } from './consultas-paciente.service';

describe('ConsultasPacienteService', () => {
  let service: ConsultasPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultasPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
