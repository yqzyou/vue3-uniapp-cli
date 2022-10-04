"use strict";
var common_vendor = require("../common/vendor.js");
var testStore = common_vendor.defineStore({
  id: "test",
  persist: {
    enabled: true,
    H5Storage: window == null ? void 0 : window.localStorage,
    strategies: [
      {
        key: "test",
        storage: window == null ? void 0 : window.sessionStorage
      }
    ]
  },
  state: () => {
    return {
      name: "\u5F20\u4E09",
      token: "token..."
    };
  },
  getters: {
    fullName: (state) => {
      return state.name + "\u4E30";
    }
  },
  actions: {
    updateName(name) {
      this.name = name;
    }
  }
});
exports.testStore = testStore;
