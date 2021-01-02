import { Injectable } from '@angular/core';
import { PayBill } from './pay-bill.service.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PayBillService {
  payBillStored: PayBill = null;

  constructor() {}

  savePayBill(payBill: PayBill) {
    this.payBillStored = payBill;
  }

  get getPayBill() {
    return this.payBillStored || this.createPayBill();
  }

  private createPayBill(): PayBill {
    return {
      fromAccount: '',
      amount: null,
      cardType: null,
      paymentId: '',
      creditor: '',
      paymentDate: '',
    };
  }
}
