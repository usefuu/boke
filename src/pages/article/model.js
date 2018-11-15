import { getlist, likeit } from "./service";
import { message } from "antd";
export default {
  namespace: "article",
  state: {
    pagedata: {
      listData: null,
      total: null
    }
  },
  subscriptions: {},
  effects: {
    *getList(
      {
        payload: { type, pageSize, pageNumber }
      },
      { call, put, select }
    ) {
      try {
        const res = yield call(getlist, { type, pageSize, pageNumber });
        yield put({
          type: "save",
          payload: {
            pagedata: {
              listData: res.data,
              total: res.total
            }
          }
        });
      } catch (e) {
        message.error(e.message);
      }
    },
    *like(
      {
        payload: { type, id },
        callback
      },
      { call, put, select }
    ) {
      try {
        const res = yield call(likeit, { type, id });
        if (callback) callback(res);
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
