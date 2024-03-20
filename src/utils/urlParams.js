export function getUrlParams(url) {
  const paramsStr = url.split("?")[1]; // 获取URL查询字符串并去掉?
  let params = {};
  paramsStr.split("&").forEach((param) => {
    let [key, value] = param.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return params;
}
