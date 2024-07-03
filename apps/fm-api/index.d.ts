declare namespace Express {
  export interface Request {
    auth?: {
      iss: string;
      sub: string;
      aud: Array<string>;
      iat: number;
      exp: number;
      scope: string;
      azp: string;
    };
  }
}
