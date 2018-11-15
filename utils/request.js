import fetch from "dva/fetch";
import { message } from "antd";
import router from "umi/router";
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    sessionStorage.clear();
    router.push("/");
    const error = new Error("认证失败,请重新登陆");
    throw error;
  }
  // notification.error({
  //   message: `请求错误 ${response.status}: ${response.url}`,
  //   description: response.statusText,
  // });

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

// 统一状态处理
function checkCode(response) {
  if (response && response.code) {
    if (response.code === 403) {
      message.error("无权访问！");
    }
    if (response.code !== 200 && response.code !== 201) {
      const error = new Error(response.msg);
      throw error;
    } else {
      return response;
    }
  } else {
    message.error("json文件错误");
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    // credentials: "include"
  };

  const newOptions = { ...defaultOptions, ...options };

  // let userInfo = sessionStorage.getItem("userInfo") || "";
  // if (userInfo && userInfo !== "undefined") {
  //   userInfo = JSON.parse(userInfo);
  //   if(userInfo.accessToken){
  //     newOptions.headers = {
  //       accessToken: userInfo.accessToken,
  //       ...newOptions.headers
  //     };
  //   }else{
  //     newOptions.headers = {
  //       ...newOptions.headers
  //     };
  //   }
  // }
  if (newOptions.method === "POST" || newOptions.method === "PUT") {
    newOptions.headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      ...newOptions.headers
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => {
      return response.json();
    })
    .then(checkCode);

  // .catch(err => err);
}
