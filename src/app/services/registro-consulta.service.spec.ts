import { TestBed } from '@angular/core/testing';

import { RegistroConsultaService } from './registro-consulta.service';

describe('RegistroConsultaService', () => {
  let service: RegistroConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
