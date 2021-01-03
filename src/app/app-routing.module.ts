import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { RequestPaymentComponent } from './request-payment/request-payment.component';
import { AcceptPaymentComponent } from './accept-payment/accept-payment.component';
import { SharePaymentComponent } from './share-payment/share-payment.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pay-bill',
    component: PayBillComponent,
  },
  {
    path: 'receipt',
    component: ReceiptComponent,
  },
  {
    path: 'requestpayment',
    component: RequestPaymentComponent,
  },
  {
    path: 'acceptpayment',
    component: AcceptPaymentComponent,
  },
  {
    path: 'sharepayment',
    component: SharePaymentComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
