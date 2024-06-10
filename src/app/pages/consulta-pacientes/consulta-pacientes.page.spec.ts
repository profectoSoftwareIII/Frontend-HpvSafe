import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaPacientesPage } from './consulta-pacientes.page';

describe('ConsultaPacientesPage', () => {
  let component: ConsultaPacientesPage;
  let fixture: ComponentFixture<ConsultaPacientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
