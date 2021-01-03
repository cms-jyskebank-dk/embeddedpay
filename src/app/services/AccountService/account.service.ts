import { Injectable, Inject } from '@angular/core';
import { AccountItem } from './account.service.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountItems: AccountItem[] = null;
  requestedPayment: AccountItem = null;

  constructor() {}

  unflagAccountItem(id: number) {
    let index = this.accountItems.findIndex(d => d.id === id); 
    this.accountItems[index].flagged = false;
  }

  addAccountItem(newItem: AccountItem) {
    this.accountItems.push(newItem);
  }

  get accountList()
  {
    if(!this.accountItems)
      { this.accountItems = this.createAccountList(); }
    return this.accountItems;
  }

  private createAccountList(): AccountItem[] {
    return [
      {
        id: 0,
        title: 'McDonalds Sorgenfri',
        subTitle: 'Take away & fastfood',
        amount: '-132,00',
        detail: 225,
        flagged: false,
        deposit: false,
      },
      {
        id: 1,
        title: 'Irma Sorgenfri Torv',
        subTitle: 'Dagligvarer',
        amount: '95,25',
        detail: -3,
        flagged: false,
        deposit: false,
      },
      {
        id: 2,
        title: 'Meny',
        subTitle: 'Dagligvarer',
        amount: '24.75',
        detail: -115,
        flagged: false,
        deposit: false,
      },
    ];
  }

}
