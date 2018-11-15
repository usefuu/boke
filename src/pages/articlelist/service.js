import { request, config } from "../../../utils";
import { stringify } from "qs";
const {
  api: {
    articlelist: { list }
  }
} = config;
export function getlist(params) {
  return request(list, {
    method: "POST",
    body: { ...params }
  });
}
// export function getList(params) {
//     return request(`${list}?${stringify(params)}`);
//   }