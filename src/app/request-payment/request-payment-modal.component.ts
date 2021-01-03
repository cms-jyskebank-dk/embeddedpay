import { Component, Optional, SkipSelf, Inject } from '@angular/core';
import { COMPONENT_PROPS } from '@kirbydesign/designsystem';

import { Modal } from '@kirbydesign/designsystem';

import { PaymentrequestService } from '../services/PaymentrequestService//paymentrequest.service';
import { PaymentrequestItem } from '../services/PaymentrequestService/paymentrequest.service.interfaces';

@Component({
  templateUrl: './request-payment-modal.component.html',
  styleUrls: ['./request-payment-modal.component.scss'],
})
export class RequestPaymentModalComponent {
  paymentrequest: PaymentrequestItem;

  constructor(
    @Optional() @SkipSelf() private modal: Modal, 
    @Inject(COMPONENT_PROPS) private componentProps,
    private paymentrequestservice: PaymentrequestService) {
      this.paymentrequest = componentProps.prop1 as PaymentrequestItem;
      //console.log(this.paymentrequest);
    }

  onHideModal() {
    this.paymentrequestservice.setPaymentRequest(this.paymentrequest);
    //console.log(this.paymentrequest);
    this.modal.close();
  }
}