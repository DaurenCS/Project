export interface Client{
    id: number;
    login:string;
    password:string;
    name:string;
    surname:string;
}

export interface AuthToken {
    token: string;
  }