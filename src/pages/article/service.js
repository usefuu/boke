import { request, config } from "../../../utils";
import { stringify } from "qs";
const {
  api: {
    article: { list },

      index: { like }

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
// export function getlist() {
//  return request(`${list}`);
// }
