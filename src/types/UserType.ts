export interface IUser {
  active: boolean;
  code: string;
  createdAt: Date;
  id: string;
  image: string;
  phone: string;
  updatedAt: Date;
  username: string;
}

export interface IResponse {
  data: IUser;
  error: string;
  message: string;
  status: number;
  success: boolean;
}
