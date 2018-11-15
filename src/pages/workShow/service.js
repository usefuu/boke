import { request, config } from "../../../utils";
import {stringfy} from "qs"
const {
    api: {
        workshow:{
            list
          }
    }
  } = config;
  export  function getlist(params){

    return request(list,{
        method: "POST",
        body: {...params}
      });;
  }