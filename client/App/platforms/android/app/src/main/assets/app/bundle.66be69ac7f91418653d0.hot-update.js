webpackHotUpdate("bundle",{

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
              _c("Label", {
                staticClass: "drawer-header",
                attrs: { text: "Drawer" }
              }),
              _vm._l(_vm.options, function(option, i) {
                return _c(
                  "GridLayout",
                  {
                    key: i,
                    staticClass: "m-y-5",
                    attrs: { rows: "auto,auto", columns: "auto,*" }
                  },
                  [
                    _c("Label", {
                      staticClass: "mdi m-x-5",
                      attrs: {
                        row: "0",
                        rowSpan: "2",
                        fontSize: "25%",
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
                        fontSize: "20",
                        text: option.title
                      }
                    }),
                    _c("Label", {
                      attrs: {
                        row: "1",
                        col: "1",
                        fontSize: "15",
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