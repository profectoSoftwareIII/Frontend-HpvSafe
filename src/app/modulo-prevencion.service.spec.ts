import { TestBed } from '@angular/core/testing';

import { ModuloPrevencionService } from './modulo-prevencion.service';

describe('ModuloPrevencionService', () => {
  let service: ModuloPrevencionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuloPrevencionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
