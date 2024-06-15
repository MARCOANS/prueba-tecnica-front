export type RequestConfig = {
  url: string;
  method:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | undefined;
  baseURL: string;
  transformRequest: any[];
  transformResponse: any[];
  headers: any;
  params: any;
  timeout: number;
  withCredentials: boolean;
  responseType:
    | "json"
    | "arraybuffer"
    | "blob"
    | "document"
    | "text"
    | "stream"
    | undefined;
  maxContentLength: number;
  validateStatus: (status: number) => boolean;
  maxRedirects: number;
};

export type RequestCustomError = {
  code?: number;
  message: string;
};

export type SearchTerm = {
  term: string;
  page: 1;
};
