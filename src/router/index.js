import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/login/index.vue";
import LayoutView from "../views/LayoutView.vue";
import UserView from "@/views/UserView.vue";
import RoleView from "@/views/RoleView.vue";
import ArticleView from "@/views/ArticleView.vue";
import index from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/overview",
    name: "overview",
    component: LayoutView,
    meta: {
      name: "首页",
    },
    redirect: "/overview/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: index,
        meta: {
          name: "总览",
        },
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    component: LayoutView,
    meta: {
      name: "系统管理",
    },
    children: [
      {
        path: "user",
        name: "user",
        component: UserView,
        meta: {
          name: "用户管理",
        },
      },
      {
        path: "role",
        name: "role",
        component: RoleView,
        meta: {
          name: "角色管理",
        },
      },
      {
        path: "article",
        name: "article",
        component: ArticleView,
        meta: {
          name: "文章管理",
        },
      },
    ],
  },
  {
    path: "/resource",
    name: "resource",
    component: LayoutView,
    meta: {
      name: "资源管理",
    },
    children: [
      {
        path: "article",
        name: "article",
        component: ArticleView,
        meta: {
          name: "文章管理",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    redirect: "/overview",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 在每次路由切换前进行身份验证
// router.beforeEach((to, from, next) => {
// });

// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

export default router;
