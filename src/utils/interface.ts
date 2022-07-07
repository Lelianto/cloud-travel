export interface ReviewsProps {
  title?: string;
  clearList?: string;
  hideLabel?: boolean;
  show?: number;
  checkList?: Array<string>;
  options?: Array<{ label: string; disabled?: boolean }>;
}
