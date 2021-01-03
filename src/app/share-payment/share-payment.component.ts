import { Component, OnInit } from '@angular/core';

import { ToastController, ToastConfig, ModalController, ModalConfig } from '@kirbydesign/designsystem';

@Component({
  selector: 'app-sharepayment',
  templateUrl: './share-payment.component.html',
  styleUrls: ['./share-payment.component.scss'],
})
export class SharePaymentComponent implements OnInit {

  constructor(private toastController: ToastController, 
    private modalController: ModalController) {}

  ngOnInit(): void {
  }

}
