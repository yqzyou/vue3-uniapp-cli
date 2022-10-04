"use strict";
var common_vendor = require("../common/vendor.js");
var setupStore = common_vendor.defineStore(
  "setup",
  () => {
    const name = common_vendor.ref("allen");
    const token = common_vendor.ref("token...");
    const fullName = common_vendor.computed$1(() => {
      return name.value + " ttk";
    });
    const updateName = (val) => {
      name.value = val;
    };
    return {
      name,
      token,
      fullName,
      updateName
    };
  },
  {
    persist: {
      enabled: true
    }
  }
);
exports.setupStore = setupStore;
