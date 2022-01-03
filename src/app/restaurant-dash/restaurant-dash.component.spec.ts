import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDashComponent } from './restaurant-dash.component';

describe('RestaurantDashComponent', () => {
  let component: RestaurantDashComponent;
  let fixture: ComponentFixture<RestaurantDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
