webpackHotUpdate_N_E("pages/services",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      services = _useState[0],
      setServices = _useState[1];

  var getServices = /*#__PURE__*/function () {
    var _ref = Object(_home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data;
      return _home_quinaiton_dev_sladeWelding_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api_sanityClient__WEBPACK_IMPORTED_MODULE_5__["default"].fetch("*[_type == \"post\"]{ \n      title, \n      slug, \n      mainImage{ \n        asset->{ \n          _id, \n          url\n        }, \n        alt\n        }\n    }");

            case 2:
              data = _context.sent;
              setServices(data);

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
    try {
      getServices();
      console.log(services);
    } catch (err) {
      console.error(err);
    }
  });

  var createServiceSection = function createServiceSection() {
    var services = services.forEach(function (service) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "services-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/pressure_welding-min.jpg",
            alt: "Pressure Welding",
            width: 500,
            height: 500
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-text",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: "Pressure Welding"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Slade Welding offers fully certified pressure welding services for all piping from mild steel to stainless. Our welder has the experience and certifications to effortlessly perform any pressure welding procedures needed to get the job done. Whether its pipe fabrication or your basic pressure weld, our fully tooled welding truck gives us the ability to come to you and complete your projects on-site and in the most cost effective way possible while exceeding the industries standards"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    className: "services-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Services"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Pressure Welding"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Slade Welding offers fully certified pressure welding services for all piping from mild steel to stainless. Our welder has the experience and certifications to effortlessly perform any pressure welding procedures needed to get the job done. Whether its pipe fabrication or your basic pressure weld, our fully tooled welding truck gives us the ability to come to you and complete your projects on-site and in the most cost effective way possible while exceeding the industries standards"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Structural Welding & Fabrication"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Whether your structural jobs are small, large, above ground or below ground Slade Welding has you fully covered! Our welder is fully certified with all Position CWB tickets that comply with the Canadian Welding industry standards, along with multiple up to date safety tickets ensuring your project gets completed in the safest and most efficient way possible. Our trucks come to you fully equipped with the tools and equipment needed to complete your fabrication project or structural welds on location."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Equipment Repair"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Slade Welding has years of experience in the logging, mining and farming industries. Therefore, we help to make your repair stress free by providing our valuable knowledge and solutions when it comes to your welding repairs or fabrication needs. Our mobile welding truck is able to get to your location no matter how far down a logging road you may be and ensure your job is completed correctly in order to give you that piece of mind while your far out in the bush."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_s(services, "6zIv7VYIWrxuvR7GDZce08FfVgw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZXMuanMiXSwibmFtZXMiOlsic2VydmljZXMiLCJ1c2VTdGF0ZSIsInNldFNlcnZpY2VzIiwiZ2V0U2VydmljZXMiLCJzYW5pdHlDbGllbnQiLCJmZXRjaCIsImRhdGEiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJjcmVhdGVTZXJ2aWNlU2VjdGlvbiIsImZvckVhY2giLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsb0JBQU07QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDZEQsUUFEYztBQUFBLE1BQ0pFLFdBREk7O0FBR3JCLE1BQU1DLFdBQVc7QUFBQSw0U0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNDQyx5REFBWSxDQUFDQyxLQUFiLHlLQUREOztBQUFBO0FBQ1pDLGtCQURZO0FBWWxCSix5QkFBVyxDQUFDSSxJQUFELENBQVg7O0FBWmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhILFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBZUFJLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk7QUFDRkosaUJBQVc7QUFDWEssYUFBTyxDQUFDQyxHQUFSLENBQVlULFFBQVo7QUFDRCxLQUhELENBR0UsT0FBT1UsR0FBUCxFQUFZO0FBQ1pGLGFBQU8sQ0FBQ0csS0FBUixDQUFjRCxHQUFkO0FBQ0Q7QUFDRixHQVBRLENBQVQ7O0FBU0EsTUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDLFFBQU1aLFFBQVEsR0FBR0EsUUFBUSxDQUFDYSxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM3QywwQkFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsZUFBRyxFQUFDLDJCQUROO0FBRUUsZUFBRyxFQUFDLGtCQUZOO0FBR0UsaUJBQUssRUFBRSxHQUhUO0FBSUUsa0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlCRCxLQTFCZ0IsQ0FBakI7QUEyQkQsR0E1QkQ7O0FBOEJBLHNCQUNFO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0UscUVBQUMsaURBQUQ7QUFDRSxhQUFHLEVBQUMsMkJBRE47QUFFRSxhQUFHLEVBQUMsa0JBRk47QUFHRSxlQUFLLEVBQUUsR0FIVDtBQUlFLGdCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNCRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFDLDZCQUROO0FBRUUsYUFBRyxFQUFDLG9CQUZOO0FBR0UsZUFBSyxFQUFFLEdBSFQ7QUFJRSxnQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLGVBMkNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0UscUVBQUMsaURBQUQ7QUFDRSxhQUFHLEVBQUMsaUJBRE47QUFFRSxhQUFHLEVBQUMsa0JBRk47QUFHRSxlQUFLLEVBQUUsR0FIVDtBQUlFLGdCQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzRUQsQ0EvSEQ7O0dBQU1kLFE7O0FBaUlTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2aWNlcy4wNGQwZmM1ZGFmODk4ZWUxMTc1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnLi9hcGkvc2FuaXR5Q2xpZW50JztcbmNvbnN0IHNlcnZpY2VzID0gKCkgPT4ge1xuICBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRTZXJ2aWNlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKGAqW190eXBlID09IFwicG9zdFwiXXsgXG4gICAgICB0aXRsZSwgXG4gICAgICBzbHVnLCBcbiAgICAgIG1haW5JbWFnZXsgXG4gICAgICAgIGFzc2V0LT57IFxuICAgICAgICAgIF9pZCwgXG4gICAgICAgICAgdXJsXG4gICAgICAgIH0sIFxuICAgICAgICBhbHRcbiAgICAgICAgfVxuICAgIH1gKTtcbiAgICBzZXRTZXJ2aWNlcyhkYXRhKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBnZXRTZXJ2aWNlcygpO1xuICAgICAgY29uc29sZS5sb2coc2VydmljZXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlU2VydmljZVNlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBzZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMtY29udGVudCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2UtY2FyZCc+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPScvcHJlc3N1cmVfd2VsZGluZy1taW4uanBnJ1xuICAgICAgICAgICAgICBhbHQ9J1ByZXNzdXJlIFdlbGRpbmcnXG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxuICAgICAgICAgICAgICA8aDM+UHJlc3N1cmUgV2VsZGluZzwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFNsYWRlIFdlbGRpbmcgb2ZmZXJzIGZ1bGx5IGNlcnRpZmllZCBwcmVzc3VyZSB3ZWxkaW5nIHNlcnZpY2VzIGZvclxuICAgICAgICAgICAgICAgIGFsbCBwaXBpbmcgZnJvbSBtaWxkIHN0ZWVsIHRvIHN0YWlubGVzcy4gT3VyIHdlbGRlciBoYXMgdGhlXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZSBhbmQgY2VydGlmaWNhdGlvbnMgdG8gZWZmb3J0bGVzc2x5IHBlcmZvcm0gYW55IHByZXNzdXJlXG4gICAgICAgICAgICAgICAgd2VsZGluZyBwcm9jZWR1cmVzIG5lZWRlZCB0byBnZXQgdGhlIGpvYiBkb25lLiBXaGV0aGVyIGl0cyBwaXBlXG4gICAgICAgICAgICAgICAgZmFicmljYXRpb24gb3IgeW91ciBiYXNpYyBwcmVzc3VyZSB3ZWxkLCBvdXIgZnVsbHkgdG9vbGVkIHdlbGRpbmdcbiAgICAgICAgICAgICAgICB0cnVjayBnaXZlcyB1cyB0aGUgYWJpbGl0eSB0byBjb21lIHRvIHlvdSBhbmQgY29tcGxldGUgeW91clxuICAgICAgICAgICAgICAgIHByb2plY3RzIG9uLXNpdGUgYW5kIGluIHRoZSBtb3N0IGNvc3QgZWZmZWN0aXZlIHdheSBwb3NzaWJsZSB3aGlsZVxuICAgICAgICAgICAgICAgIGV4Y2VlZGluZyB0aGUgaW5kdXN0cmllcyBzdGFuZGFyZHNcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nc2VydmljZXMtY29udGFpbmVyJz5cbiAgICAgIDxoMj5TZXJ2aWNlczwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMtY29udGVudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlLWNhcmQnPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPScvcHJlc3N1cmVfd2VsZGluZy1taW4uanBnJ1xuICAgICAgICAgICAgYWx0PSdQcmVzc3VyZSBXZWxkaW5nJ1xuICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XG4gICAgICAgICAgICA8aDM+UHJlc3N1cmUgV2VsZGluZzwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU2xhZGUgV2VsZGluZyBvZmZlcnMgZnVsbHkgY2VydGlmaWVkIHByZXNzdXJlIHdlbGRpbmcgc2VydmljZXMgZm9yXG4gICAgICAgICAgICAgIGFsbCBwaXBpbmcgZnJvbSBtaWxkIHN0ZWVsIHRvIHN0YWlubGVzcy4gT3VyIHdlbGRlciBoYXMgdGhlXG4gICAgICAgICAgICAgIGV4cGVyaWVuY2UgYW5kIGNlcnRpZmljYXRpb25zIHRvIGVmZm9ydGxlc3NseSBwZXJmb3JtIGFueSBwcmVzc3VyZVxuICAgICAgICAgICAgICB3ZWxkaW5nIHByb2NlZHVyZXMgbmVlZGVkIHRvIGdldCB0aGUgam9iIGRvbmUuIFdoZXRoZXIgaXRzIHBpcGVcbiAgICAgICAgICAgICAgZmFicmljYXRpb24gb3IgeW91ciBiYXNpYyBwcmVzc3VyZSB3ZWxkLCBvdXIgZnVsbHkgdG9vbGVkIHdlbGRpbmdcbiAgICAgICAgICAgICAgdHJ1Y2sgZ2l2ZXMgdXMgdGhlIGFiaWxpdHkgdG8gY29tZSB0byB5b3UgYW5kIGNvbXBsZXRlIHlvdXJcbiAgICAgICAgICAgICAgcHJvamVjdHMgb24tc2l0ZSBhbmQgaW4gdGhlIG1vc3QgY29zdCBlZmZlY3RpdmUgd2F5IHBvc3NpYmxlIHdoaWxlXG4gICAgICAgICAgICAgIGV4Y2VlZGluZyB0aGUgaW5kdXN0cmllcyBzdGFuZGFyZHNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlLWNhcmQnPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPScvc3RydWN0dXJhbF93ZWxkaW5nLW1pbi5qcGcnXG4gICAgICAgICAgICBhbHQ9J3N0cnVjdHVyYWwgd2VsZGluZydcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxuICAgICAgICAgICAgPGgzPlN0cnVjdHVyYWwgV2VsZGluZyAmIEZhYnJpY2F0aW9uPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBXaGV0aGVyIHlvdXIgc3RydWN0dXJhbCBqb2JzIGFyZSBzbWFsbCwgbGFyZ2UsIGFib3ZlIGdyb3VuZCBvclxuICAgICAgICAgICAgICBiZWxvdyBncm91bmQgU2xhZGUgV2VsZGluZyBoYXMgeW91IGZ1bGx5IGNvdmVyZWQhIE91ciB3ZWxkZXIgaXNcbiAgICAgICAgICAgICAgZnVsbHkgY2VydGlmaWVkIHdpdGggYWxsIFBvc2l0aW9uIENXQiB0aWNrZXRzIHRoYXQgY29tcGx5IHdpdGggdGhlXG4gICAgICAgICAgICAgIENhbmFkaWFuIFdlbGRpbmcgaW5kdXN0cnkgc3RhbmRhcmRzLCBhbG9uZyB3aXRoIG11bHRpcGxlIHVwIHRvXG4gICAgICAgICAgICAgIGRhdGUgc2FmZXR5IHRpY2tldHMgZW5zdXJpbmcgeW91ciBwcm9qZWN0IGdldHMgY29tcGxldGVkIGluIHRoZVxuICAgICAgICAgICAgICBzYWZlc3QgYW5kIG1vc3QgZWZmaWNpZW50IHdheSBwb3NzaWJsZS4gT3VyIHRydWNrcyBjb21lIHRvIHlvdVxuICAgICAgICAgICAgICBmdWxseSBlcXVpcHBlZCB3aXRoIHRoZSB0b29scyBhbmQgZXF1aXBtZW50IG5lZWRlZCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICB5b3VyIGZhYnJpY2F0aW9uIHByb2plY3Qgb3Igc3RydWN0dXJhbCB3ZWxkcyBvbiBsb2NhdGlvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlLWNhcmQnPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPScvcmVwYWlyLW1pbi5wbmcnXG4gICAgICAgICAgICBhbHQ9J2VxdWlwbWVudCByZXBhaXInXG4gICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cbiAgICAgICAgICAgIDxoMz5FcXVpcG1lbnQgUmVwYWlyPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTbGFkZSBXZWxkaW5nIGhhcyB5ZWFycyBvZiBleHBlcmllbmNlIGluIHRoZSBsb2dnaW5nLCBtaW5pbmcgYW5kXG4gICAgICAgICAgICAgIGZhcm1pbmcgaW5kdXN0cmllcy4gVGhlcmVmb3JlLCB3ZSBoZWxwIHRvIG1ha2UgeW91ciByZXBhaXIgc3RyZXNzXG4gICAgICAgICAgICAgIGZyZWUgYnkgcHJvdmlkaW5nIG91ciB2YWx1YWJsZSBrbm93bGVkZ2UgYW5kIHNvbHV0aW9ucyB3aGVuIGl0XG4gICAgICAgICAgICAgIGNvbWVzIHRvIHlvdXIgd2VsZGluZyByZXBhaXJzIG9yIGZhYnJpY2F0aW9uIG5lZWRzLiBPdXIgbW9iaWxlXG4gICAgICAgICAgICAgIHdlbGRpbmcgdHJ1Y2sgaXMgYWJsZSB0byBnZXQgdG8geW91ciBsb2NhdGlvbiBubyBtYXR0ZXIgaG93IGZhclxuICAgICAgICAgICAgICBkb3duIGEgbG9nZ2luZyByb2FkIHlvdSBtYXkgYmUgYW5kIGVuc3VyZSB5b3VyIGpvYiBpcyBjb21wbGV0ZWRcbiAgICAgICAgICAgICAgY29ycmVjdGx5IGluIG9yZGVyIHRvIGdpdmUgeW91IHRoYXQgcGllY2Ugb2YgbWluZCB3aGlsZSB5b3VyIGZhclxuICAgICAgICAgICAgICBvdXQgaW4gdGhlIGJ1c2guXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9