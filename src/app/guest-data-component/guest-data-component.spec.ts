import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDataComponent } from './guest-data-component';

describe('GuestDataComponent', () => {
  let component: GuestDataComponent;
  let fixture: ComponentFixture<GuestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
