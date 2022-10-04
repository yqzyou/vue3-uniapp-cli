"use strict";
var helper_piniaAutoRefs = require("../helper/pinia-auto-refs.js");
var config_app = require("./app.js");
const { token, userId } = helper_piniaAutoRefs.useStore("user");
const { getSystemInfo } = helper_piniaAutoRefs.useStore("app");
const systemInfo = getSystemInfo();
const { brand: device, screenWidth: swidth, screenHeight: sheight } = systemInfo;
const commonParams = {
  isLoading: true,
  appid: config_app.APP_ID,
  v: config_app.APP_VERSION,
  device,
  swidth,
  sheight
};
function getCommonParams() {
  return Object.assign(
    { token: token.value, uuid: userId.value, timestamp: Date.now() },
    commonParams
  );
}
function setCommonParams(params) {
  Object.assign(commonParams, params);
}
exports.getCommonParams = getCommonParams;
exports.setCommonParams = setCommonParams;
