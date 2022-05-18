import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentMenuComponent } from './bill-payment-menu.component';

describe('BillPaymentMenuComponent', () => {
  let component: BillPaymentMenuComponent;
  let fixture: ComponentFixture<BillPaymentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPaymentMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPaymentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
