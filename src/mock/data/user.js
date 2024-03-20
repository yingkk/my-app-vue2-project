import Mock from "mockjs";

const Menus = [
  {
    id: "index",
    name: "首页",
    path: "/overview",
    icon: "el-icon-s-flag",
  },
  {
    id: "1",
    name: "系统管理",
    icon: "el-icon-setting",
    path: "/system",
    children: [
      {
        id: "1-1",
        name: "用户管理",
        path: "/system/user",
      },
      {
        id: "1-2",
        name: "角色管理",
        path: "/system/role",
      },
    ],
  },
  {
    id: "2",
    name: "资源管理",
    icon: "el-icon-menu",
    path: "/resource",
    children: [
      {
        id: "2-1",
        name: "文章管理",
        path: "/resource/article",
      },
    ],
  },
  {
    id: "3",
    name: "统计分析",
    icon: "el-icon-document",
    path: "/stat",
  },
];

const Codes = ["add", "delete", "edit", "query"];

const LoginUser = {
  code: 20000,
  sucess: true,
  data: {
    id: "001",
    username: "admin",
    password: "123456",
    email: Mock.mock("@email()"),
    birth: Mock.Random.date(),
    gender: Mock.Random.integer(0, 1),
    token: Mock.mock("@string(upper,8)@time(T)"),
    avatar: Mock.Random.image("40X40", "#409eff", "V"),
    menus: Menus,
    codes: Codes,
  },
};
const MockData = Mock.mock({
  "data|1578": [
    {
      id: Mock.Random.guid(),
      username: Mock.Random.cname(),
      email: Mock.mock("@email()"),
      birth: Mock.Random.date(),
      gender: Mock.Random.integer(0, 1),
      avatar: Mock.Random.image("40X40"),
      phone: /1[3-9][0-9]{9}/,
      address: Mock.mock("@county(true)"),
    },
  ],
});

const Users = {
  code: 20000,
  sucess: true,
  data: MockData,
};

export { LoginUser, Users, MockData };
