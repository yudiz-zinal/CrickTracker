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

/***/ "./graphQL/graphql.js":
/*!****************************!*\
  !*** ./graphQL/graphql.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_HOME_PAGE\": function() { return /* binding */ GET_HOME_PAGE; },\n/* harmony export */   \"GET_MENU\": function() { return /* binding */ GET_MENU; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query ExampleQuery($getHomePageArticleInput2: getHomePageArticleInput) {\\n    getHomePageArticle(input: $getHomePageArticleInput2) {\\n      nTotal\\n      aResults {\\n        iCategoryId\\n        sName\\n        iSeriesId\\n        eType\\n        sSlug\\n        bScoreCard\\n        aArticle {\\n          _id\\n          sTitle\\n          sSubtitle\\n          sSrtTitle\\n          oImg {\\n            sText\\n            sCaption\\n            sAttribute\\n            sUrl\\n          }\\n          oTImg {\\n            sText\\n            sCaption\\n            sAttribute\\n            sUrl\\n          }\\n          dPublishDate\\n          dPublishDisplayDate\\n          nDuration\\n          sDescription\\n          sType\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query ExampleQuery {\\n    getMenuTree {\\n      aResults {\\n        _id\\n        sUrl\\n        sTitle\\n        sSlug\\n        oChildren {\\n          _id\\n          sTitle\\n          sSlug\\n          sUrl\\n          eUrlTarget\\n          eMenuType\\n        }\\n        nSort\\n        eUrlTarget\\n        eStatus\\n        eMenuType\\n        bIsMulti\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst GET_HOME_PAGE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nconst GET_MENU = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaFFML2dyYXBocWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBRTlCLE1BQU1DLGdCQUFnQkQsbURBQUdBLG9CQXFDOUI7QUFDSyxNQUFNRSxXQUFXRixtREFBR0EscUJBd0J6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ncmFwaFFML2dyYXBocWwuanM/N2UzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BBR0UgPSBncWxgXG4gIHF1ZXJ5IEV4YW1wbGVRdWVyeSgkZ2V0SG9tZVBhZ2VBcnRpY2xlSW5wdXQyOiBnZXRIb21lUGFnZUFydGljbGVJbnB1dCkge1xuICAgIGdldEhvbWVQYWdlQXJ0aWNsZShpbnB1dDogJGdldEhvbWVQYWdlQXJ0aWNsZUlucHV0Mikge1xuICAgICAgblRvdGFsXG4gICAgICBhUmVzdWx0cyB7XG4gICAgICAgIGlDYXRlZ29yeUlkXG4gICAgICAgIHNOYW1lXG4gICAgICAgIGlTZXJpZXNJZFxuICAgICAgICBlVHlwZVxuICAgICAgICBzU2x1Z1xuICAgICAgICBiU2NvcmVDYXJkXG4gICAgICAgIGFBcnRpY2xlIHtcbiAgICAgICAgICBfaWRcbiAgICAgICAgICBzVGl0bGVcbiAgICAgICAgICBzU3VidGl0bGVcbiAgICAgICAgICBzU3J0VGl0bGVcbiAgICAgICAgICBvSW1nIHtcbiAgICAgICAgICAgIHNUZXh0XG4gICAgICAgICAgICBzQ2FwdGlvblxuICAgICAgICAgICAgc0F0dHJpYnV0ZVxuICAgICAgICAgICAgc1VybFxuICAgICAgICAgIH1cbiAgICAgICAgICBvVEltZyB7XG4gICAgICAgICAgICBzVGV4dFxuICAgICAgICAgICAgc0NhcHRpb25cbiAgICAgICAgICAgIHNBdHRyaWJ1dGVcbiAgICAgICAgICAgIHNVcmxcbiAgICAgICAgICB9XG4gICAgICAgICAgZFB1Ymxpc2hEYXRlXG4gICAgICAgICAgZFB1Ymxpc2hEaXNwbGF5RGF0ZVxuICAgICAgICAgIG5EdXJhdGlvblxuICAgICAgICAgIHNEZXNjcmlwdGlvblxuICAgICAgICAgIHNUeXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgR0VUX01FTlUgPSBncWxgXG4gIHF1ZXJ5IEV4YW1wbGVRdWVyeSB7XG4gICAgZ2V0TWVudVRyZWUge1xuICAgICAgYVJlc3VsdHMge1xuICAgICAgICBfaWRcbiAgICAgICAgc1VybFxuICAgICAgICBzVGl0bGVcbiAgICAgICAgc1NsdWdcbiAgICAgICAgb0NoaWxkcmVuIHtcbiAgICAgICAgICBfaWRcbiAgICAgICAgICBzVGl0bGVcbiAgICAgICAgICBzU2x1Z1xuICAgICAgICAgIHNVcmxcbiAgICAgICAgICBlVXJsVGFyZ2V0XG4gICAgICAgICAgZU1lbnVUeXBlXG4gICAgICAgIH1cbiAgICAgICAgblNvcnRcbiAgICAgICAgZVVybFRhcmdldFxuICAgICAgICBlU3RhdHVzXG4gICAgICAgIGVNZW51VHlwZVxuICAgICAgICBiSXNNdWx0aVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJncWwiLCJHRVRfSE9NRV9QQUdFIiwiR0VUX01FTlUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./graphQL/graphql.js\n"));

/***/ })

});