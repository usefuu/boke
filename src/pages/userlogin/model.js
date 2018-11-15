import { loging } from "./service";
import { message } from "antd";
export default {
  namespace: "login",
  state: {},
  subscriptions: {},
  effects: {
    *getlogin({payload: { user, password }},{ call, put, select }) 
      {
      try {
        const res = yield call(loging, { username: user, password });
        
      } catch (e) {
        message.error(e.message);
      }
    }
  },
  reducers: {}
};
