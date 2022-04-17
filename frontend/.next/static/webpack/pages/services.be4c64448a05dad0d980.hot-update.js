webpackHotUpdate_N_E("pages/services",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_sanityClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/sanityClient */ "./pages/api/sanityClient.js");




var _jsxFileName = "/home/quinaiton/dev/sladeWelding/frontend/pages/services.js",
    _this = undefined,
    _s = $RefreshSig$();





var services = function services() {
  _s();

  var getServices = /*#__PURE__*/function () {
    var _ref = Object(_home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data;
      return _home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api_sanityClient__WEBPACK_IMPORTED_MODULE_5__["default"].fetch("*[_type == \"post\"]{ \n      title,slug, mainImage{ \n        asset->{ \n          _id, \n          url\n        }, \n        alt\n        }\n      }\n    }");

            case 2:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getServices() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getServices();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "services-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Services"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "services-content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "service-card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/pressure_welding-min.jpg",
          alt: "Pressure Welding",
          width: 500,
          height: 500
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Pressure Welding"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Slade Welding offers fully certified pressure welding services for all piping from mild steel to stainless. Our welder has the experience and certifications to effortlessly perform any pressure welding procedures needed to get the job done. Whether its pipe fabrication or your basic pressure weld, our fully tooled welding truck gives us the ability to come to you and complete your projects on-site and in the most cost effective way possible while exceeding the industries standards"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "service-card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/structural_welding-min.jpg",
          alt: "structural welding",
          width: 500,
          height: 500
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Structural Welding & Fabrication"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Whether your structural jobs are small, large, above ground or below ground Slade Welding has you fully covered! Our welder is fully certified with all Position CWB tickets that comply with the Canadian Welding industry standards, along with multiple up to date safety tickets ensuring your project gets completed in the safest and most efficient way possible. Our trucks come to you fully equipped with the tools and equipment needed to complete your fabrication project or structural welds on location."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "service-card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/repair-min.png",
          alt: "equipment repair",
          width: 500,
          height: 500
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Equipment Repair"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Slade Welding has years of experience in the logging, mining and farming industries. Therefore, we help to make your repair stress free by providing our valuable knowledge and solutions when it comes to your welding repairs or fabrication needs. Our mobile welding truck is able to get to your location no matter how far down a logging road you may be and ensure your job is completed correctly in order to give you that piece of mind while your far out in the bush."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(services, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (services);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZpY2VzLmpzIl0sIm5hbWVzIjpbInNlcnZpY2VzIiwiZ2V0U2VydmljZXMiLCJzYW5pdHlDbGllbnQiLCJmZXRjaCIsImRhdGEiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVyQixNQUFNQyxXQUFXO0FBQUEsNFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0MseURBQVksQ0FBQ0MsS0FBYixpS0FERDs7QUFBQTtBQUNaQyxrQkFEWTtBQUFBLCtDQVdYQSxJQVhXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhILFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBY0FJLHlEQUFTLENBQUMsWUFBTTtBQUNkSixlQUFXO0FBQ1osR0FGUSxDQUFUO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFDLDJCQUROO0FBRUUsYUFBRyxFQUFDLGtCQUZOO0FBR0UsZUFBSyxFQUFFLEdBSFQ7QUFJRSxnQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFzQkU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGFBQUcsRUFBQyw2QkFETjtBQUVFLGFBQUcsRUFBQyxvQkFGTjtBQUdFLGVBQUssRUFBRSxHQUhUO0FBSUUsZ0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQTJDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFDLGlCQUROO0FBRUUsYUFBRyxFQUFDLGtCQUZOO0FBR0UsZUFBSyxFQUFFLEdBSFQ7QUFJRSxnQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBekZEOztHQUFNRCxROztBQTJGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmljZXMuYmU0YzY0NDQ4YTA1ZGFkMGQ5ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnLi9hcGkvc2FuaXR5Q2xpZW50JztcbmNvbnN0IHNlcnZpY2VzID0gKCkgPT4ge1xuXG4gIGNvbnN0IGdldFNlcnZpY2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goYCpbX3R5cGUgPT0gXCJwb3N0XCJdeyBcbiAgICAgIHRpdGxlLHNsdWcsIG1haW5JbWFnZXsgXG4gICAgICAgIGFzc2V0LT57IFxuICAgICAgICAgIF9pZCwgXG4gICAgICAgICAgdXJsXG4gICAgICAgIH0sIFxuICAgICAgICBhbHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1gKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFNlcnZpY2VzKCk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcy1jb250YWluZXInPlxuICAgICAgPGgyPlNlcnZpY2VzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcy1jb250ZW50Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2UtY2FyZCc+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9Jy9wcmVzc3VyZV93ZWxkaW5nLW1pbi5qcGcnXG4gICAgICAgICAgICBhbHQ9J1ByZXNzdXJlIFdlbGRpbmcnXG4gICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgIDxoMz5QcmVzc3VyZSBXZWxkaW5nPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTbGFkZSBXZWxkaW5nIG9mZmVycyBmdWxseSBjZXJ0aWZpZWQgcHJlc3N1cmUgd2VsZGluZyBzZXJ2aWNlcyBmb3JcbiAgICAgICAgICAgICAgYWxsIHBpcGluZyBmcm9tIG1pbGQgc3RlZWwgdG8gc3RhaW5sZXNzLiBPdXIgd2VsZGVyIGhhcyB0aGVcbiAgICAgICAgICAgICAgZXhwZXJpZW5jZSBhbmQgY2VydGlmaWNhdGlvbnMgdG8gZWZmb3J0bGVzc2x5IHBlcmZvcm0gYW55IHByZXNzdXJlXG4gICAgICAgICAgICAgIHdlbGRpbmcgcHJvY2VkdXJlcyBuZWVkZWQgdG8gZ2V0IHRoZSBqb2IgZG9uZS4gV2hldGhlciBpdHMgcGlwZVxuICAgICAgICAgICAgICBmYWJyaWNhdGlvbiBvciB5b3VyIGJhc2ljIHByZXNzdXJlIHdlbGQsIG91ciBmdWxseSB0b29sZWQgd2VsZGluZ1xuICAgICAgICAgICAgICB0cnVjayBnaXZlcyB1cyB0aGUgYWJpbGl0eSB0byBjb21lIHRvIHlvdSBhbmQgY29tcGxldGUgeW91clxuICAgICAgICAgICAgICBwcm9qZWN0cyBvbi1zaXRlIGFuZCBpbiB0aGUgbW9zdCBjb3N0IGVmZmVjdGl2ZSB3YXkgcG9zc2libGUgd2hpbGVcbiAgICAgICAgICAgICAgZXhjZWVkaW5nIHRoZSBpbmR1c3RyaWVzIHN0YW5kYXJkc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2UtY2FyZCc+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9Jy9zdHJ1Y3R1cmFsX3dlbGRpbmctbWluLmpwZydcbiAgICAgICAgICAgIGFsdD0nc3RydWN0dXJhbCB3ZWxkaW5nJ1xuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XG4gICAgICAgICAgICA8aDM+U3RydWN0dXJhbCBXZWxkaW5nICYgRmFicmljYXRpb248L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdoZXRoZXIgeW91ciBzdHJ1Y3R1cmFsIGpvYnMgYXJlIHNtYWxsLCBsYXJnZSwgYWJvdmUgZ3JvdW5kIG9yXG4gICAgICAgICAgICAgIGJlbG93IGdyb3VuZCBTbGFkZSBXZWxkaW5nIGhhcyB5b3UgZnVsbHkgY292ZXJlZCEgT3VyIHdlbGRlciBpc1xuICAgICAgICAgICAgICBmdWxseSBjZXJ0aWZpZWQgd2l0aCBhbGwgUG9zaXRpb24gQ1dCIHRpY2tldHMgdGhhdCBjb21wbHkgd2l0aCB0aGVcbiAgICAgICAgICAgICAgQ2FuYWRpYW4gV2VsZGluZyBpbmR1c3RyeSBzdGFuZGFyZHMsIGFsb25nIHdpdGggbXVsdGlwbGUgdXAgdG9cbiAgICAgICAgICAgICAgZGF0ZSBzYWZldHkgdGlja2V0cyBlbnN1cmluZyB5b3VyIHByb2plY3QgZ2V0cyBjb21wbGV0ZWQgaW4gdGhlXG4gICAgICAgICAgICAgIHNhZmVzdCBhbmQgbW9zdCBlZmZpY2llbnQgd2F5IHBvc3NpYmxlLiBPdXIgdHJ1Y2tzIGNvbWUgdG8geW91XG4gICAgICAgICAgICAgIGZ1bGx5IGVxdWlwcGVkIHdpdGggdGhlIHRvb2xzIGFuZCBlcXVpcG1lbnQgbmVlZGVkIHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgIHlvdXIgZmFicmljYXRpb24gcHJvamVjdCBvciBzdHJ1Y3R1cmFsIHdlbGRzIG9uIGxvY2F0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2UtY2FyZCc+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9Jy9yZXBhaXItbWluLnBuZydcbiAgICAgICAgICAgIGFsdD0nZXF1aXBtZW50IHJlcGFpcidcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxuICAgICAgICAgICAgPGgzPkVxdWlwbWVudCBSZXBhaXI8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFNsYWRlIFdlbGRpbmcgaGFzIHllYXJzIG9mIGV4cGVyaWVuY2UgaW4gdGhlIGxvZ2dpbmcsIG1pbmluZyBhbmRcbiAgICAgICAgICAgICAgZmFybWluZyBpbmR1c3RyaWVzLiBUaGVyZWZvcmUsIHdlIGhlbHAgdG8gbWFrZSB5b3VyIHJlcGFpciBzdHJlc3NcbiAgICAgICAgICAgICAgZnJlZSBieSBwcm92aWRpbmcgb3VyIHZhbHVhYmxlIGtub3dsZWRnZSBhbmQgc29sdXRpb25zIHdoZW4gaXRcbiAgICAgICAgICAgICAgY29tZXMgdG8geW91ciB3ZWxkaW5nIHJlcGFpcnMgb3IgZmFicmljYXRpb24gbmVlZHMuIE91ciBtb2JpbGVcbiAgICAgICAgICAgICAgd2VsZGluZyB0cnVjayBpcyBhYmxlIHRvIGdldCB0byB5b3VyIGxvY2F0aW9uIG5vIG1hdHRlciBob3cgZmFyXG4gICAgICAgICAgICAgIGRvd24gYSBsb2dnaW5nIHJvYWQgeW91IG1heSBiZSBhbmQgZW5zdXJlIHlvdXIgam9iIGlzIGNvbXBsZXRlZFxuICAgICAgICAgICAgICBjb3JyZWN0bHkgaW4gb3JkZXIgdG8gZ2l2ZSB5b3UgdGhhdCBwaWVjZSBvZiBtaW5kIHdoaWxlIHlvdXIgZmFyXG4gICAgICAgICAgICAgIG91dCBpbiB0aGUgYnVzaC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==