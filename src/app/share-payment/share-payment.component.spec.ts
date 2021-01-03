import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePaymentComponent } from './share-payment.component';

describe('RequestPaymentComponent', () => {
  let component: SharePaymentComponent;
  let fixture: ComponentFixture<SharePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharePaymentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
