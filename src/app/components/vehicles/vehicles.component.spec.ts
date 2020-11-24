import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesComponent ]
    })
    .compileComponents();
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
