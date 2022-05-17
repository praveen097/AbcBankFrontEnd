import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentRegistrationComponent } from './bill-payment-registration.component';

describe('BillPaymentRegistrationComponent', () => {
  let component: BillPaymentRegistrationComponent;
  let fixture: ComponentFixture<BillPaymentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPaymentRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPaymentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
