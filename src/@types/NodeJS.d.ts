declare namespace NodeJS {
  export interface Global {
    [key: string]: any;
  }
  export interface Process extends Process {
    browser: boolean;
  }
}
