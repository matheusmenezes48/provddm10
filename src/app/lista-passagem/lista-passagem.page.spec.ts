import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPassagemPage } from './lista-passagem.page';

describe('ListaPassagemPage', () => {
  let component: ListaPassagemPage;
  let fixture: ComponentFixture<ListaPassagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPassagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPassagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
