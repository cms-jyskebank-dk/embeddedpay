import { SegmentItem } from "@kirbydesign/designsystem";

export interface AccountItem {
  id: number;
  title: string,
  subTitle: string;
  amount: string;
  detail: number;
  flagged: boolean;
  color: string;
}
