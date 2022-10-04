"use strict";
var common_vendor = require("../common/vendor.js");
var appStore = common_vendor.defineStore({
  id: "app",
  state: () => {
    return {
      systemInfo: {}
    };
  },
  actions: {
    getSystemInfo() {
      if (Object.keys(this.systemInfo).length)
        return this.systemInfo;
      const systemInfo = common_vendor.index.getSystemInfoSync();
      Object.assign(this.systemInfo, systemInfo);
      return systemInfo;
    }
  }
});
exports.appStore = appStore;
