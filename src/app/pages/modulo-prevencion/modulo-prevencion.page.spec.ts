import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModuloPrevencionPage } from './modulo-prevencion.page';

describe('ModuloPrevencionPage', () => {
  let component: ModuloPrevencionPage;
  let fixture: ComponentFixture<ModuloPrevencionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloPrevencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
