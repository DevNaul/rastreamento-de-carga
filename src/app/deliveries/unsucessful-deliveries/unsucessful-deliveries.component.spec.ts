import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsucessfulDeliveriesComponent } from './unsucessful-deliveries.component';

describe('UnsucessfulDeliveriesComponent', () => {
  let component: UnsucessfulDeliveriesComponent;
  let fixture: ComponentFixture<UnsucessfulDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsucessfulDeliveriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsucessfulDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
