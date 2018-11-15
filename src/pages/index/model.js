import { getlist ,likeit} from "./service";
import { message } from "antd";
export default {
  namespace: "index",
  state: {
    middata:null,
    total:null,
    rightdata:null,
    leftdata:null
  },
  subscriptions: {},
  effects: {
    *getList({payload: {numb}},{ call, put, select }) 
      {
      try {
        const res = yield call(getlist,{numb});
        yield put({
          type:"save",
          payload:{
            middata:res.middata,
            total:res.total,
            rightdata:res.rightdata,
            leftdata:res.leftdata
          }
        })
      } catch (e) {
        message.error(e.message);
      }
    },
    *like({payload: {type,id},callback},{ call, put, select }) 
    {
    try {
      const res = yield call(likeit,{type,id});
      if(callback)callback(res)
    } catch (e) {
      message.error(e.message);
    }
  }
  },
  reducers: {
    save(state,{payload}){
      return {...state,...payload}
    }
  }
};
