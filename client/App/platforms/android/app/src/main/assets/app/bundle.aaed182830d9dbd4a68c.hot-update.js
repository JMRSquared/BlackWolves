webpackHotUpdate("bundle",{

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nActionBar[data-v-67410f3a] {\n  background-color: #2f2f2f;\n  color: #f7f7f7;\n}\n.title[data-v-67410f3a] {\n  text-align: left;\n  padding-left: 16;\n}\n.message[data-v-67410f3a] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #333333;\n}\n.drawer-header[data-v-67410f3a] {\n  padding: 30 16 16 16;\n  margin-bottom: 16;\n  background-color: #010202;\n  color: #f7f7f7;\n}\n.drawer-item[data-v-67410f3a] {\n  padding: 8 16;\n  color: #2f2f2f;\n  font-size: 16;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
    __webpack_require__("../node_modules/tns-core-modules/ui/styling/style-scope.js");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.__hmrRefresh({ type: 'style', module: './Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})