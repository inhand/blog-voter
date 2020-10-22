export interface Blog {
  id: string;
  header: string;
  content1: string;
  content2: string;
  vote: number;
}

export enum RowType {
  ODD = 'odd',
  EVEN = 'even'
}
