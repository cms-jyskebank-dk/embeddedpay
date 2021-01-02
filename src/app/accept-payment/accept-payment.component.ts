import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalController, ModalConfig } from '@kirbydesign/designsystem';
import {Subscription} from 'rxjs';

import { PaymentrequestService } from '../services/PaymentrequestService//paymentrequest.service';
import { PaymentrequestItem } from '../services/PaymentrequestService/paymentrequest.service.interfaces';
import { AcceptPaymentModalComponent } from './accept-payment-modal.component'


@Component({
  selector: 'app-acceptpayment',
  templateUrl: './accept-payment.component.html',
  styleUrls: ['./accept-payment.component.scss'],
})
export class AcceptPaymentComponent implements OnInit, OnDestroy {
  requesteditems: PaymentrequestItem[] = null;
  anyrequests: boolean = false;

  private payrequestSubscription: Subscription;

  constructor(
    private modalController: ModalController, 
    private paymentRequestService: PaymentrequestService) {}

  ngOnInit(): void {
    this.payrequestSubscription = 
        this.paymentRequestService.PaymentRequestRemoved.subscribe({
          next: (item: PaymentrequestItem) => { this.handleRemovedPaymentRequest(item); }
      })

    this.requesteditems = this.paymentRequestService.requestedPayments;
    this.anyrequests = this.paymentRequestService.getRequestForMe;
  }

  public handleRemovedPaymentRequest(request: PaymentrequestItem) {
    this.requesteditems = this.paymentRequestService.requestedPayments;
    this.anyrequests = this.paymentRequestService.getRequestForMe;
  }

  ngOnDestroy() {
    if (this.payrequestSubscription) {
      this.payrequestSubscription.unsubscribe();
      this.payrequestSubscription = null;
    }
  }
  
  onOpenConfirmation(requestedpaymentitem: PaymentrequestItem)
  {
    const config: ModalConfig = {
      flavor: 'compact',
      size: 'full-height',
      component: AcceptPaymentModalComponent,
      componentProps: {
        prop1: requestedpaymentitem,
      }
    };
    this.modalController.showModal(config, this.onClose );
  }

  private onClose(data: any): void
  {
    //console.log('on close event');
  }
}
