"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/artical/article.js":
/*!***************************************!*\
  !*** ./components/artical/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Artical; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Artical(param) {\n    let { article  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: article.map((e)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col mx-auto justify-center \",\n                        children: e.aArticle.map((artical, key)=>{\n                            if (artical.sType === \"nBig\") {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white rounded-lg p-2 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"rounded-lg img-fluid \",\n                                            height: 400,\n                                            width: 600,\n                                            src: \"https://picsum.photos/600/400?random=\" + key\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                            lineNumber: 18,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"py-3 font-bold text-lg capitalize\",\n                                            children: artical.sTitle\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-gray-500 text-[12px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: moment__WEBPACK_IMPORTED_MODULE_1___default()(artical.dPublishDate).format(\"DD MMM YYYY\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 27\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, key + artical.sTitle, true, {\n                                    fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                    lineNumber: 14,\n                                    columnNumber: 23\n                                }, this);\n                            }\n                            if (artical.sType === \"nSmall\") {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white w-full rounded-lg p-3 shadow-primary-700 hover:shadow-lg flex flex-row gap-3 mt-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"rounded-lg \",\n                                            height: 120,\n                                            width: 160,\n                                            src: \"https://picsum.photos/200/100?random=\" + key\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"py-3 font-bold text-sm capitalize\",\n                                                    children: artical.sTitle\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-gray-500 font-semibold text-[12px]\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: moment__WEBPACK_IMPORTED_MODULE_1___default()(artical.dPublishDate).format(\"DD MMM YYYY\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 27\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, key + artical.sTitle, true, {\n                                    fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 23\n                                }, this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                        lineNumber: 10,\n                        columnNumber: 15\n                    }, this)\n                }, e.sName, false, {\n                    fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yudizsolutionsltd./Desktop/Zinal/crictracker/components/artical/article.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Artical;\nvar _c;\n$RefreshReg$(_c, \"Artical\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FydGljYWwvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDRztBQUNoQixTQUFTRSxRQUFRLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYO0lBQzlCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtzQkFDRUQsUUFBUUcsR0FBRyxDQUFDLENBQUNDLElBQU07Z0JBQ2xCLHFCQUNFLDhEQUFDSDs4QkFDQyw0RUFBQ0E7d0JBQUlDLFdBQVU7a0NBQ1pFLEVBQUVDLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDLENBQUNHLFNBQVNDLE1BQVE7NEJBQ2hDLElBQUlELFFBQVFFLEtBQUssS0FBSyxRQUFRO2dDQUM1QixxQkFDRSw4REFBQ1A7b0NBQ0NDLFdBQVU7O3NEQUdWLDhEQUFDSixtREFBS0E7NENBQ0pJLFdBQVU7NENBQ1ZPLFFBQVE7NENBQ1JDLE9BQU87NENBQ1BDLEtBQUssMENBQTBDSjs7Ozs7O3NEQUVqRCw4REFBQ0s7NENBQUdWLFdBQVU7c0RBQ1hJLFFBQVFPLE1BQU07Ozs7OztzREFFakIsOERBQUNaOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDWTswREFDRWpCLDZDQUFNQSxDQUFDUyxRQUFRUyxZQUFZLEVBQUVDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O21DQWJwQ1QsTUFBTUQsUUFBUU8sTUFBTTs7Ozs7NEJBa0IvQixDQUFDOzRCQUNELElBQUlQLFFBQVFFLEtBQUssS0FBSyxVQUFVO2dDQUM5QixxQkFDRSw4REFBQ1A7b0NBQ0NDLFdBQVU7O3NEQUdWLDhEQUFDSixtREFBS0E7NENBQ0pJLFdBQVU7NENBQ1ZPLFFBQVE7NENBQ1JDLE9BQU87NENBQ1BDLEtBQUssMENBQTBDSjs7Ozs7O3NEQUVqRCw4REFBQ047NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDVTtvREFBR1YsV0FBVTs4REFDWEksUUFBUU8sTUFBTTs7Ozs7OzhEQUVqQiw4REFBQ1o7b0RBQUlDLFdBQVU7OERBQ2IsNEVBQUNZO2tFQUNFakIsNkNBQU1BLENBQUNTLFFBQVFTLFlBQVksRUFBRUMsTUFBTSxDQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWZIVCxNQUFNRCxRQUFRTyxNQUFNOzs7Ozs0QkFzQi9CLENBQUM7d0JBQ0g7Ozs7OzttQkFyRE1ULEVBQUVhLEtBQUs7Ozs7O1lBeURyQjs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0tBbkV1QmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXJ0aWNhbC9hcnRpY2xlLmpzP2EwODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljYWwoeyBhcnRpY2xlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAge2FydGljbGUubWFwKChlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtlLnNOYW1lfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBteC1hdXRvIGp1c3RpZnktY2VudGVyIFwiPlxuICAgICAgICAgICAgICAgIHtlLmFBcnRpY2xlLm1hcCgoYXJ0aWNhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJ0aWNhbC5zVHlwZSA9PT0gXCJuQmlnXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtMiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXkgKyBhcnRpY2FsLnNUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBpbWctZmx1aWQgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCJodHRwczovL3BpY3N1bS5waG90b3MvNjAwLzQwMD9yYW5kb209XCIgKyBrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweS0zIGZvbnQtYm9sZCB0ZXh0LWxnIGNhcGl0YWxpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljYWwuc1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCAgIHRleHQtWzEycHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoYXJ0aWNhbC5kUHVibGlzaERhdGUpLmZvcm1hdChcIkREIE1NTSBZWVlZXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChhcnRpY2FsLnNUeXBlID09PSBcIm5TbWFsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIHJvdW5kZWQtbGcgcC0zIHNoYWRvdy1wcmltYXJ5LTcwMCBob3ZlcjpzaGFkb3ctbGcgZmxleCBmbGV4LXJvdyBnYXAtMyBtdC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5ICsgYXJ0aWNhbC5zVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzEwMD9yYW5kb209XCIgKyBrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTMgZm9udC1ib2xkIHRleHQtc20gY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2FsLnNUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGQgdGV4dC1bMTJweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoYXJ0aWNhbC5kUHVibGlzaERhdGUpLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJERCBNTU0gWVlZWVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vbWVudCIsIkltYWdlIiwiQXJ0aWNhbCIsImFydGljbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJlIiwiYUFydGljbGUiLCJhcnRpY2FsIiwia2V5Iiwic1R5cGUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImgxIiwic1RpdGxlIiwic3BhbiIsImRQdWJsaXNoRGF0ZSIsImZvcm1hdCIsInNOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/artical/article.js\n"));

/***/ })

});