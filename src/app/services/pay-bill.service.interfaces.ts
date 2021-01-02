import { SegmentItem } from "@kirbydesign/designsystem";

export interface PayBill {
  fromAccount: string;
  amount: number;
  cardType: SegmentItem;
  paymentId: string;
  creditor: string;
  paymentDate: string;
}
