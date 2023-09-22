import { SafeAny } from './any';

export class RESTApiModel<T> {
  message?: string;

  data?: T;

  error?: CustomError;

  [key: string]: SafeAny;
}

export class CustomError {
  code?: string;

  params?: CustomErrorParam;
}

export class CustomErrorParam {
  field?: string | string[];

  value?: string | string[];

  [key: string]: SafeAny;
}
