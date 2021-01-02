import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KirbyModule } from '@kirbydesign/designsystem';
import { RequestPaymentComponent } from './request-payment/request-payment.component';
import { RequestPaymentModalComponent } from './request-payment/request-payment-modal.component';
import { AcceptPaymentComponent } from './accept-payment/accept-payment.component';
import { AcceptPaymentModalComponent } from './accept-payment/accept-payment-modal.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PayBillComponent,
    ReceiptComponent,
    RequestPaymentComponent,
    RequestPaymentModalComponent,
    AcceptPaymentComponent,
    AcceptPaymentModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, KirbyModule],
  providers: [{ provide: LOCALE_ID, useValue: 'da-DK' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
