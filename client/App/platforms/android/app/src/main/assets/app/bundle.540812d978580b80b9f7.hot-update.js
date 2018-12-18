webpackHotUpdate("bundle",{

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nActionBar[data-v-67410f3a] {\n  background-color: #2f2f2f;\n  color: #f7f7f7;\n}\n.title[data-v-67410f3a] {\n  text-align: left;\n  padding-left: 16;\n}\n.message[data-v-67410f3a] {\n  vertical-align: center;\n  text-align: center;\n  font-size: 20;\n  color: #333333;\n}\n.drawer-header[data-v-67410f3a] {\n  padding: 30 16 16 16;\n  margin-bottom: 16;\n  background-color: #010202;\n  color: #f7f7f7;\n}\n.drawer-item[data-v-67410f3a] {\n  padding: 8 16;\n  color: #2f2f2f;\n  font-size: 16;\n}\n.b-50-black[data-v-67410f3a]{\n    margin-bottom:1px solid #010202;\n}\n", ""]);

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

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c(
        "ActionBar",
        [
          _c(
            "GridLayout",
            { attrs: { width: "100%", columns: "auto, *" } },
            [
              _c("Label", {
                staticClass: "mdi",
                attrs: {
                  fontSize: "25%",
                  text: _vm._f("fonticon")("mdi-menu"),
                  col: "0"
                },
                on: {
                  tap: function($event) {
                    _vm.$refs.drawer.nativeView.showDrawer()
                  }
                }
              }),
              _c("Label", {
                staticClass: "title",
                attrs: {
                  verticalAlignment: "center",
                  text: "Welcome to BlackWolves!",
                  col: "1"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "RadSideDrawer",
        { ref: "drawer" },
        [
          _c(
            "StackLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:drawerContent",
                  arg: "drawerContent",
                  modifiers: {}
                }
              ],
              attrs: { backgroundColor: "#F7F7F7" }
            },
            [
              _c(
                "GridLayout",
                { staticClass: "drawer-header", attrs: { rows: "auto,auto" } },
                [
                  _c("Image", {
                    attrs: {
                      row: "0",
                      width: "80",
                      textAlignment: "right",
                      height: "auto",
                      backgroundColor: "#F7F7F7",
                      stretch: "aspectFill",
                      borderRadius: "50%",
                      src: "https://robohash.org/joe"
                    }
                  }),
                  _c(
                    "StackLayout",
                    { attrs: { row: "1" } },
                    [
                      _c("Label", {
                        staticClass: "font-weight-bold",
                        attrs: { fontSize: "15", text: "Sirwali Joseph" }
                      }),
                      _c("Label", {
                        attrs: { fontSize: "13", text: "mulavhe@gmail.com" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._l(_vm.options, function(option, i) {
                return _c(
                  "GridLayout",
                  {
                    key: i,
                    staticClass: "m-y-10 b-50-black",
                    attrs: { rows: "auto,auto", columns: "auto,*" }
                  },
                  [
                    _c("Label", {
                      staticClass: "mdi m-x-10",
                      attrs: {
                        row: "0",
                        rowSpan: "2",
                        fontSize: "30%",
                        verticalAlignment: "center",
                        textAlignment: "center",
                        text: _vm._f("fonticon")("mdi-" + option.icon)
                      }
                    }),
                    _c("Label", {
                      staticClass: "font-weight-bold",
                      attrs: {
                        row: "0",
                        col: "1",
                        fontSize: "15",
                        text: option.title
                      }
                    }),
                    _c("Label", {
                      attrs: {
                        row: "1",
                        col: "1",
                        fontSize: "13",
                        text: option.description
                      }
                    })
                  ],
                  1
                )
              })
            ],
            2
          ),
          _c(
            "GridLayout",
            {
              directives: [
                {
                  name: "view",
                  rawName: "v-view:mainContent",
                  arg: "mainContent",
                  modifiers: {}
                }
              ],
              attrs: { columns: "*", rows: "*,*" }
            },
            [
              _c("Label", {
                staticClass: "message",
                attrs: { text: "Hellow world", col: "0", row: "0" }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})