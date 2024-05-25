import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaPacientePage } from './consulta-paciente.page';

describe('ConsultaPacientePage', () => {
  let component: ConsultaPacientePage;
  let fixture: ComponentFixture<ConsultaPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
