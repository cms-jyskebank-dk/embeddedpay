import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayBillService } from '../services/pay-bill.service';
import { PayBill } from '../services/pay-bill.service.interfaces';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
  payBill: PayBill;

  constructor(private router: Router, public payBillService: PayBillService) {}

  ngOnInit(): void {
    this.payBill = this.payBillService.getPayBill;
  }

  onDone() {
    this.payBillService.savePayBill(null);
    this.router.navigate(['home']);
  }
}
