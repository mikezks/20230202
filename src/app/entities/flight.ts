export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string; // ISO format string
  delayed: boolean;
}
