import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegmentItem } from '@kirbydesign/designsystem';
import { PayBillService } from '../services/pay-bill.service';
import { PayBill } from '../services/pay-bill.service.interfaces';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss'],
})
export class PayBillComponent implements OnInit {
  // Fra konti
  fromAccounts: string[] = ['Lønkonto', 'Opsparring'];

  // Kort typer
  cardTypes: SegmentItem[] = [
    { id: '01', text: '01' },
    { id: '04', text: '04' },
    { id: '15', text: '15' },
    { id: '71', text: '71' },
    { id: '73', text: '73' },
    { id: '75', text: '75' },
  ];
  defaultCardType = 3;

  // PayBill
  payBill: PayBill;

  constructor(private router: Router, private payBillService: PayBillService) {}

  ngOnInit(): void {
    this._initPayBill();
  }

  onEnter(): void {
    this._initPayBill();
  }

  onCardTypeSelect(event: SegmentItem): void {
    this.payBill.cardType = event;
  }

  onPayBill(): void {
    this.payBillService.savePayBill(this.payBill);
    this.router.navigate(['receipt']);
  }

  private _initPayBill(): void {
    this.payBill = this.payBillService.getPayBill;
    if (this.payBill.cardType === null) {
      this.payBill.cardType = this.cardTypes[this.defaultCardType];
    }
  }
}
