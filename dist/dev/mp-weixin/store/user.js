"use strict";
var common_vendor = require("../common/vendor.js");
var userStore = common_vendor.defineStore({
  id: "user",
  state: () => {
    return {
      userInfo: {
        token: "token",
        user_id: 111
      }
    };
  },
  getters: {
    logged: (state) => {
      const { token, user_id } = state.userInfo;
      return !!(token && user_id);
    },
    token: (state) => {
      return state.userInfo.token;
    },
    userId: (state) => {
      return state.userInfo.user_id;
    }
  },
  actions: {
    setUserInfo(userInfo) {
      Object.assign(this.userInfo, userInfo);
    },
    async login(account, pwd) {
    }
  }
});
exports.userStore = userStore;
