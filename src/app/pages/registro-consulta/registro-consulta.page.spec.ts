import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroConsultaPage } from './registro-consulta.page';

describe('RegistroConsultaPage', () => {
  let component: RegistroConsultaPage;
  let fixture: ComponentFixture<RegistroConsultaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
