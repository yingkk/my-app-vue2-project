import {
  login,
  logout,
  fetchUsers,
  fetchUsersPage,
  addUser,
  deleteUser,
  updateUser,
  updateUserProperty,
} from "@/api/user";
import { getToken, setToken } from "@/utils/auth";
import router from "@/router";

export default {
  namespaced: true,
  state: {
    token: getToken(),
    users: [],
    userInfo: JSON.parse(localStorage.getItem("SET_USERINFO") || null) || {},
    menus: JSON.parse(localStorage.getItem("SET_MENUS")) || [],
    codes: JSON.parse(localStorage.getItem("SET_CODES")) || [],
  },
  getters: {},
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_USERS: (state, users) => {
      state.users = users;
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
    SET_CODES: (state, codes) => {
      state.codes = codes;
    },
  },
  actions: {
    async login({ commit }, userInfo) {
      const { username, password } = userInfo;
      const { data } = await login({
        username: username.trim(),
        password: password,
      });
      const { username: loginame, avatar } = data;
      commit("SET_TOKEN", data.token);
      commit("SET_MENUS", data.menus);
      commit("SET_CODES", data.codes);
      commit("SET_USERINFO", { loginame, avatar });
      localStorage.setItem(
        "SET_USERINFO",
        JSON.stringify({ loginame, avatar })
      );
      localStorage.setItem("SET_MENUS", JSON.stringify(data.menus));
      localStorage.setItem("SET_CODES", JSON.stringify(data.codes));
      setToken(data.token);
      router.push("/");
    },
    async logout({ commit, state }) {
      await logout(state.token);
      commit("SET_TOKEN", "");
      commit("SET_MENUS", []);
      commit("SET_CODES", []);
      commit("SET_USERINFO", {});
      localStorage.clear();
      router.push("/login");
    },
    async fetchUsers({ commit }) {
      const {
        data: { data },
      } = await fetchUsers();
      commit("SET_USERS", data);
    },
    async fetchUsersPage(_, query) {
      return await fetchUsersPage(query);
    },

    async addUser({ commit, state }, user) {
      await addUser(user);
      state.users.unshift(user);
      commit("SET_USERS", state.users);
    },
    async deleteUser(_, id) {
      await deleteUser(id);
    },
    async updateUser(_, user) {
      await updateUser(user);
    },
    async updateUserProperty(_, updateProps) {
      await updateUserProperty(updateProps);
    },
  },
};
