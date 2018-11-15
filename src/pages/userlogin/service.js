import { request, config } from "../../../utils";
import {stringfy} from "qs"
const {
    api: {
        login
    }
  } = config;
  export  function loging(params){

    return request(login,{
        method: "POST",
        body: {...params}
      });;
  }