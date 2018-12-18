webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      options: [{
        title: "Plumber",
        description: "A person that deals with pipes",
        icon: "toilet"
      }, {
        title: "Carpenter",
        description: "A person that deals with wood",
        icon: "sofa"
      }, {
        title: "Welder",
        description: "A person that deals with steal",
        icon: "worker"
      }, {
        title: "Electrician",
        description: "A person that deals with electricity",
        icon: "power-plug"
      }]
    };
  }

});

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
                      width: "60px",
                      height: "60px",
                      stretch: "fill",
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
                        attrs: { fontSize: "18", text: "Sirwali Joseph" }
                      }),
                      _c("Label", {
                        attrs: { fontSize: "15", text: "mulavhe@gmail.com" }
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
                    staticClass: "m-y-10",
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
                        fontSize: "18",
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