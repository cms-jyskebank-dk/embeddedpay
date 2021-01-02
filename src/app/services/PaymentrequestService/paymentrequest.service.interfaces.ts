import { SegmentItem } from "@kirbydesign/designsystem";

export interface PaymentrequestItem {
  id: number;
  title: string,
  subTitle: string;
  amount: string;
  detail: number;
  flagged: boolean;
  color: string;
  payee: string;
  description: string;
}
