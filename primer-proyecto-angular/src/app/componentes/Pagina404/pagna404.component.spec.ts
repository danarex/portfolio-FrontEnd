import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagna404Component } from './pagna404.component';

describe('Pagna404Component', () => {
  let component: Pagna404Component;
  let fixture: ComponentFixture<Pagna404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagna404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagna404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
