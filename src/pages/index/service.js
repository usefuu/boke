import { request, config } from "../../../utils";
import { stringify } from "qs";
const {
  api: {
    index: { list, like }
  }
} = config;
export function getlist(params) {
  return request(list, {
    method: "POST",
    body: { ...params }
  });
}
export function likeit(params) {
  return request(like, {
    method: "POST",
    body: { ...params }
  });
}
// export function getList(params) {
//     return request(`${list}?${stringify(params)}`);
//   }
