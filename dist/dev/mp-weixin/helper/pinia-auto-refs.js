"use strict";
var common_vendor = require("../common/vendor.js");
var store_app = require("../store/app.js");
var store_setup = require("../store/setup.js");
var store_test = require("../store/test.js");
var store_user = require("../store/user.js");
const storeExports = {
  app: store_app.appStore,
  setup: store_setup.setupStore,
  test: store_test.testStore,
  user: store_user.userStore
};
function useStore(storeName) {
  const store = storeExports[storeName]();
  const storeRefs = common_vendor.storeToRefs(store);
  return { ...store, ...storeRefs };
}
exports.useStore = useStore;
