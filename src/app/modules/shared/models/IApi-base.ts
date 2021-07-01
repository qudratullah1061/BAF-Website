import { ILoggedInUserInfo } from "./ilogged-in-user-info";

export interface IAPIBase {
  error:string;
  code:string;
  loggedInUser:ILoggedInUserInfo;
  description:any;
}
