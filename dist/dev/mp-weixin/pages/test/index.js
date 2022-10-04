"use strict";
var helper_piniaAutoRefs = require("../../helper/pinia-auto-refs.js");
var common_vendor = require("../../common/vendor.js");
var config_commonParams = require("../../config/commonParams.js");
require("../../store/app.js");
require("../../store/setup.js");
require("../../store/test.js");
require("../../store/user.js");
require("../../config/app.js");
if (!Array) {
  const _component_pullList = common_vendor.resolveComponent("pullList");
  _component_pullList();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    console.log(pageName, pagePath, pageQuery, "pageName,pagePath, pageQuery");
    const { name, fullName, updateName } = helper_piniaAutoRefs.useStore("setup");
    async function getTest() {
    }
    function getCommonParam() {
      console.log(config_commonParams.getCommonParams());
    }
    function setCommonParam() {
      config_commonParams.setCommonParams({ channel: "test" });
      getCommonParam();
    }
    function onScrollToLower() {
      console.log("\u81EA\u5B9A\u4E49 onScrollToLower");
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(name)),
        b: common_vendor.t(common_vendor.unref(fullName)),
        c: common_vendor.o(($event) => common_vendor.unref(updateName)("allen")),
        d: common_vendor.t(_ctx.title),
        e: common_vendor.o(
          (...args) => _ctx.changeTitle && _ctx.changeTitle(...args)
        ),
        f: common_vendor.o(getTest),
        g: common_vendor.o(
          (...args) => _ctx.postTest && _ctx.postTest(...args)
        ),
        h: common_vendor.o(getCommonParam),
        i: common_vendor.o(setCommonParam),
        j: common_vendor.o(
          (...args) => _ctx.uniAsyncTest && _ctx.uniAsyncTest(...args)
        ),
        k: common_vendor.f(20, (i, k0, i0) => {
          return {
            a: i
          };
        }),
        l: common_vendor.p({
          ["on-scroll-to-lower"]: onScrollToLower
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ef8037ce"], ["__file", "/Users/yasin/Documents/code/sm-uniapp/src/pages/test/index.vue"]]);
wx.createPage(MiniProgramPage);
