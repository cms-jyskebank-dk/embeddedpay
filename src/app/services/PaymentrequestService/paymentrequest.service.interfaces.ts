import { SegmentItem } from "@kirbydesign/designsystem";

export interface PaymentrequestItem {
  id: number;
  title: string,
  subTitle: string;
  amount: string;
  detail: number;
  flagged: boolean;
  deposit: boolean;
  payee: string;
  description: string;
}
