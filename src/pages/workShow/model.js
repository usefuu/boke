import { getlist } from "./service";
import { message } from "antd";
export default {
  namespace: "workShow",
  state: {
    list: []
  },
  subscriptions: {},
  effects: {
    *getList(
      {
        payload: { number, pageNumber }
      },
      { call, put, select }
    ) {
      try {
        const res = yield call(getlist, { number, pageNumber });
        yield put({
          type: "save",
          payload: {
            list: res.data
          }
        });
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
