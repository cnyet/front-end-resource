class AxiosError extends Error {
  isAxiosError: boolean;
  code?: string;
  request?: any;
  message?: string;
  constructor (message: string, config: any, code?: string|null, request?: any, response? :any) {
    super(message);

    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
  }
}

var axios = new AxiosError('msg', {isAxiosError: true}, '200');
console.log(axios);