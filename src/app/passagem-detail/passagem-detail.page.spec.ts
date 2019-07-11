import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemDetailPage } from './passagem-detail.page';

describe('PassagemDetailPage', () => {
  let component: PassagemDetailPage;
  let fixture: ComponentFixture<PassagemDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagemDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
