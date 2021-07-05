import { ILoggedInUserInfo } from "../../auth/models/ILogged-in-user-info";

export interface IAPIBase {
  error:string;
  code:string;
  loggedInUser:ILoggedInUserInfo;
  description:any;
}
