import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListSwipeAction } from '@kirbydesign/designsystem';
import { ModalController, ModalConfig } from '@kirbydesign/designsystem';
import { AccountService } from '../services/AccountService/account.service';
import { AccountItem } from '../services/AccountService/account.service.interfaces';
import { RequestPaymentModalComponent } from './request-payment-modal.component'

@Component({
  selector: 'app-requestpayment',
  templateUrl: './request-payment.component.html',
  styleUrls: ['./request-payment.component.scss'],
})
export class RequestPaymentComponent implements OnInit {
  items: AccountItem[] = null;
  selecteditem: AccountItem = null;

  constructor(private accountService: AccountService,
    private modalController: ModalController,
    private router: Router) {}

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
      isDisabled: (item) => item.deposit,
    },
    {
      position: 'left',
      title: 'Del',
      icon: 'share',
      type: 'success',
      onSelected: (item) => this.onFlagItem(item),
      isDisabled: (item) => item.deposit,
    },
  ];
  
  private onAnmodItem(item: any): void {
    item.flagged = !item.flagged;
    this.selecteditem = item;
    this.showModal();
  }

  private onFlagItem(item: any): void {
    this.router.navigate(['sharepayment']);
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
