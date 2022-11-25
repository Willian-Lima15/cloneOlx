/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnunciosFormComponent } from './anuncios-form.component';

describe('AnucioFormComponent', () => {
  let component: AnunciosFormComponent;
  let fixture: ComponentFixture<AnunciosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
