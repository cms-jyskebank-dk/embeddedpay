import { Component, Optional, SkipSelf, Inject } from '@angular/core';
import { COMPONENT_PROPS } from '@kirbydesign/designsystem';

import { Modal } from '@kirbydesign/designsystem';

import { AccountService } from '../services/AccountService/account.service';
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
        private paymentrequestservice: PaymentrequestService,
        private accountservice: AccountService) 
    {
      this.paymentrequest = componentProps.prop1;
      console.log(this.paymentrequest);
    }

    private Map(accountitem: PaymentrequestItem): PaymentrequestItem {
      return {
        id: accountitem.id,
        title: accountitem.title,
        subTitle: accountitem.subTitle,
        amount: accountitem.amount,
        detail: accountitem.detail,
        flagged: accountitem.flagged,
        deposit: accountitem.deposit,
        payee: accountitem.payee,
        description:accountitem.description,
      };
    }

  onAcceptRequest() {
    this.paymentrequestservice.reomvePaymentRequest(this.paymentrequest.id);
    this.accountservice.unflagAccountItem(this.paymentrequest.id);
    let newDeposit = this.Map(this.paymentrequest);
    newDeposit.deposit = true;
    this.accountservice.addAccountItem(newDeposit);
    this.modal.close();
  }

  onRejectRequest() {
    this.modal.close();
  }
}