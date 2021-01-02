import { Component, OnInit } from '@angular/core';

import { ListSwipeAction } from '@kirbydesign/designsystem';
import { ToastController, ToastConfig, ModalController, ModalConfig } from '@kirbydesign/designsystem';
import { AccountService } from '../services/AccountService/account.service';
import { AccountItem } from '../services/AccountService/account.service.interfaces';
//import { PaymentrequestService } from '../services/PaymentrequestService//paymentrequest.service';
//import { PaymentrequestItem } from '../services/PaymentrequestService/paymentrequest.service.interfaces';
import { RequestPaymentModalComponent } from './request-payment-modal.component'

@Component({
  selector: 'app-requestpayment',
  templateUrl: './request-payment.component.html',
  styleUrls: ['./request-payment.component.scss'],
})
export class RequestPaymentComponent implements OnInit {
  items: AccountItem[] = null;
  selecteditem: AccountItem = null;

  constructor(private toastController: ToastController, 
    private accountService: AccountService,
    private modalController: ModalController) {}

  ngOnInit(): void {
    this.items = this.accountService.accountList;
    //console.log('nginit in request-payment ' + this.items);
  }

  swipeActions: ListSwipeAction[] = [
    {
      position: 'left',
      title: 'Amnod',
      type: 'warning',
      icon: 'link',
      onSelected: (item) => this.onAnmodItem(item),
      isDisabled: false,
    },
    {
      position: 'left',
      title: 'Del',
      icon: 'share',
      type: 'success',
      onSelected: (item) => this.onFlagItem(item),
      isDisabled: false,
    },
  ];

  
  private onAnmodItem(item: any): void {
    item.flagged = !item.flagged;
    this.selecteditem = item;
    this.showModal();
  }

  private onFlagItem(item: any): void {
    item.flagged = !item.flagged;
    const flagState = item.flagged ? 'flagged' : 'un-flagged';
    const config: ToastConfig = {
      message: `Item '${item.title}' has been ${flagState}.`,
      messageType: 'success',
      durationInMs: 1500,
    };
    this.toastController.showToast(config);
  }

  private showModal() {
    const config: ModalConfig = {
      flavor: 'compact',
      size: 'full-height',
      component: RequestPaymentModalComponent,
      componentProps: {
        prop1: this.selecteditem,
      }
    };
    this.modalController.showModal(config);
  }

}
