/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnunciosRecentesComponent } from './anuncios-recentes.component';

describe('AnunciosRecentesComponent', () => {
  let component: AnunciosRecentesComponent;
  let fixture: ComponentFixture<AnunciosRecentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosRecentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
