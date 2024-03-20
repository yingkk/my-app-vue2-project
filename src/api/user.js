import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data,
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}

export function fetchUsers() {
  return request({
    url: "/users",
    method: "get",
  });
}

export function fetchUsersPage(query) {
  return request({
    url: "/users",
    method: "get",
    params: query,
  });
}

export function addUser(data) {
  return request({
    url: "/users",
    method: "post",
    data,
  });
}

export function deleteUser(id) {
  return request({
    url: `/users/${id}`,
    method: "delete",
  });
}

export function updateUserProperty(data) {
  return request({
    url: "/users/:id",
    method: "patch",
    data,
  });
}

export function updateUser(data) {
  return request({
    url: "/users/:id",
    method: "put",
    data,
  });
}
