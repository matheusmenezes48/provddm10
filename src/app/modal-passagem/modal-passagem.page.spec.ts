import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPassagemPage } from './modal-passagem.page';

describe('ModalPassagemPage', () => {
  let component: ModalPassagemPage;
  let fixture: ComponentFixture<ModalPassagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPassagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPassagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
