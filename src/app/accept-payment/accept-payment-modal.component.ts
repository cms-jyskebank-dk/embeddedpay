import { Component, Optional, SkipSelf, Inject } from '@angular/core';
import { COMPONENT_PROPS } from '@kirbydesign/designsystem';

import { Modal } from '@kirbydesign/designsystem';

import { AccountItem } from '../services/AccountService/account.service.interfaces';
import { PaymentrequestService } from '../services/PaymentrequestService//paymentrequest.service';
import { PaymentrequestItem } from '../services/PaymentrequestService/paymentrequest.service.interfaces';

@Component({
  templateUrl: './accept-payment-modal.component.html',
  styleUrls: ['./accept-payment-modal.component.scss'],
})
export class AcceptPaymentModalComponent {
  paymentrequest: PaymentrequestItem;

  constructor(
        @Optional() @SkipSelf() private modal: Modal, 
        @Inject(COMPONENT_PROPS) private componentProps,
        private paymentrequestservice: PaymentrequestService) 
    {
      this.paymentrequest = componentProps.prop1;
      console.log(this.paymentrequest);
    }

    private Map(accountitem: AccountItem): PaymentrequestItem {
      return {
        id: accountitem.id,
        title: accountitem.title,
        subTitle: accountitem.subTitle,
        amount: accountitem.amount,
        detail: accountitem.detail,
        flagged: accountitem.flagged,
        color: accountitem.color,
        payee: "",
        description:"",
      };
    }

  onAcceptRequest() {
    this.paymentrequestservice.reomvePaymentRequest(this.paymentrequest.id);
    this.modal.close();
  }

  onRejectRequest() {
    this.modal.close();
  }
}