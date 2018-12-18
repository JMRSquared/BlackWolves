webpackHotUpdate("bundle",{

/***/ "./main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/App.vue");
/* harmony import */ var nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-fonticon/nativescript-fonticon.js");
/* harmony import */ var nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./services/router.js");
/* harmony import */ var nativescript_vue_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-vue-navigator/index.js");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
            if (true) {
                const fileSystemModule = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
                const applicationFiles = fileSystemModule.knownFolders.currentApp();

                global.__hmrLivesyncBackup = global.__onLiveSync;
                global.__onLiveSync = function () {
                    console.log("HMR: Sync...");
                    __webpack_require__("../node_modules/nativescript-dev-webpack/hot.js")(__webpack_require__.h(), (fileName) => applicationFiles.getFile(fileName));
                };

                global.__hmrRefresh = function({ type, module }) {
                    global.__hmrNeedReload = true;
                    setTimeout(() => {
                        if(global.__hmrNeedReload) {
                            global.__hmrNeedReload = false;
                            global.__hmrLivesyncBackup({ type, module });
                        }
                    });
                }

                global.__hmrInitialSync = true; // needed to determine if we are performing initial sync
                global.__onLiveSync();
            }
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

 // require the couchbase module




nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].debug = true;
nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].paths = {
  mdi: "./assets/materialdesignicons.css"
};
nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].loadCss(); // Prints Vue logs when --env.production is *NOT* set while building

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.silent = "development" === 'production';
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$router = _services_router__WEBPACK_IMPORTED_MODULE_4__["default"];
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$route = null;
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.registerElement('RadSideDrawer', () => __webpack_require__("../node_modules/nativescript-ui-sidedrawer/ui-sidedrawer.js").RadSideDrawer);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter("fonticon", nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["fonticon"]);
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_vue_navigator__WEBPACK_IMPORTED_MODULE_5__["default"], {
  routes: _services_router__WEBPACK_IMPORTED_MODULE_4__["default"].routes
});
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  data() {
    return {
      isLoading: false
    };
  },

  beforeCreate() {
    if (!this.$route) {
      this.$route = this.$navigator.route;
    }
  }

});
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})