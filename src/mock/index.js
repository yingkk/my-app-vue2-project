import Mock from "mockjs";
import { LoginUser, Users, MockData } from "@/mock/data/user";
import { getUrlParams } from "@/utils/urlParams";

Mock.mock("/login", "post", LoginUser);
Mock.mock("/logout", "post", { code: 20000, sucess: true, data: null });

Mock.mock("/users", "get", Users);
Mock.mock(/\/users/, "get", ({ url }) => {
  const params = getUrlParams(url);
  const pageSize = parseInt(params.pageSize) || 1;
  const pageIndex = parseInt(params.pageIndex) || 20;

  const total = MockData.data.length;
  const totalPage = Math.ceil(total / pageSize);
  const start = (pageIndex - 1) * pageSize;
  const end = start + pageSize;
  const list = MockData.data.slice(start, end);
  return {
    code: 20000,
    sucess: true,
    data: {
      list,
      total,
      totalPage,
    },
  };
});

Mock.mock("/users", "post", (res) => {
  MockData.data.unshit(res);
  return {
    code: 20000,
    success: "true",
    data: MockData.data,
  };
});

Mock.mock(/\/users\/*/, "delete", (res) => {
  const { url } = res;
  const [, , id] = url.split("/");
  MockData.data = MockData.data.filter((t) => t.id !== id);
  return {
    code: 20000,
    success: "true",
  };
});

//提供改变的对象
Mock.mock("/users/:id", "put", (res) => {
  const _index = MockData.data.findIndex((t) => t.id === res.id);
  MockData.data.splice(_index, 1, res);
  return {
    code: 20000,
    success: "true",
    data: MockData.data,
  };
});

//提供改变的属性
Mock.mock("/users/:id", "patch", (res) => {
  const id = "id";
  const origin = MockData.data.find((t) => t.id === id);
  const target = Object.assign(origin, res);
  const _index = MockData.data.findIndex((t) => t.id === res.id);
  MockData.data.splice(_index, 1, target);
  return {
    code: 20000,
    success: "true",
    data: MockData.data,
  };
});
