export enum SweetAlertType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
}

export type SweetAlert = {
  show: boolean;

  icon?: SweetAlertType;
  title?: string;
  text?: string;
  didClose?: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
  customClass?: any;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  reverseButtons?: boolean;
  onResolve?: any;
  
};

export type ShowSweetAlert = Omit<SweetAlert, "show">;
