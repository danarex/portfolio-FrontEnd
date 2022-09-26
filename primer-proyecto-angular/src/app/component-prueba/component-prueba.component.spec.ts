import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPruebaComponent } from './component-prueba.component';

describe('ComponentPruebaComponent', () => {
  let component: ComponentPruebaComponent;
  let fixture: ComponentFixture<ComponentPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
