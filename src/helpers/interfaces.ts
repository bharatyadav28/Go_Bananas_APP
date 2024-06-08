export interface incomingTodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface Data {
  id: string | number;
  userId: string | number;
  title: string | number;
  completed: string | number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  flex: number;
  minWidth?: string;
}
