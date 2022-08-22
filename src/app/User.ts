//create a USER interface that can store values when creating, logging in and resetting password.
//? means that it can be an optional value -
export interface User{
  userId?: number,
  email: string,
  username: string,
  password?: string,
  active?: number;
}
