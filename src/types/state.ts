export interface State {
  list: ListState;
  create: CreateState;
  show: ShowState;
  update: UpdateState;
  delete: DeleteState;
  deleteMany?: DeleteState;
}
export interface ListState {
  pagination: any;
  data?: null[] | null;
  params: ListParamsState;
  inProgress: boolean;
}
export interface PaginationOrRecord {}
export interface ListParamsState {
  perPage: number;
  page: number;
  sorts?: null[] | null;
  term?: null;
}

export interface CreateState {
  inProgress: boolean;
  success: boolean;
  error: boolean;
  message: string;
  record: any;
}
export interface UpdateState {
  inProgress: boolean;
  success: boolean;
  error: boolean;
  message: string;
}

export interface ShowState {
  inProgress: boolean;
  success: boolean;
  error: boolean;
  message: string;

  record: any;
}

export interface DeleteState {
  inProgress: boolean;
  success: boolean;
  error: boolean;
  message: string;
}
