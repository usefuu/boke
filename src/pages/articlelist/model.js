import { getlist } from "./service";
import { message } from "antd";
export default {
  namespace: "aeticelist",
  state: {
    pagedata: {
      data: '',
      head:'',
      startdata:''
    }
  },
  subscriptions: {},
  effects: {
    *getList(
      {
        payload: { id },
        callback
      },
      { call, put, select }
    ) {
      try {
        const res = yield call(getlist, { id });
        yield put({
          type: "save",
          payload: {
            pagedata: {
              data: res.data.data,
              head:res.data.head,
              startdata:res.data.startdata
            }
          }
        });
        if(callback)callback(res.data)
      } catch (e) {
        message.error(e.message);
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
