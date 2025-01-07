export interface IUserSession {
  user: {
    username: string;
    email: string;
  };
  accessToken: string;
}
