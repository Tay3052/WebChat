export interface CustomSession {
  user: {
    id: string;
    name?: string;
    email?: string;
  };
}

export interface CustomToken {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface Users {
  id: string;
  name: string;
  email: string;
}
