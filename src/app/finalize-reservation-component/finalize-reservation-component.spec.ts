import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeReservationComponent } from './finalize-reservation-component';

describe('FinalizeReservationComponent', () => {
  let component: FinalizeReservationComponent;
  let fixture: ComponentFixture<FinalizeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizeReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
