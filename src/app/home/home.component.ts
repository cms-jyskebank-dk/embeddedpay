import { Component, OnInit, DoCheck } from '@angular/core';

import { PaymentrequestService } from '../services/PaymentrequestService//paymentrequest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  showbadge: boolean = false;
  badgecount: number = 0;

  constructor(private paymentRequestService: PaymentrequestService) {}

  ngOnInit(): void {
    //this.showbadge = this.paymentRequestService.getRequestForMe
  }

  ngDoCheck() {
    this.showbadge = this.paymentRequestService.getRequestForMe
    this.badgecount = this.paymentRequestService.getRequestedPayments.length;
  }
}
