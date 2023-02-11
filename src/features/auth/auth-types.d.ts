export interface AuthSession {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}
