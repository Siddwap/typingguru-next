"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 2176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Footer = ()=>{
    const { 0: views , 1: setviews  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const increasePageView = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
            url: 'https://api.anayak.com.np/vcnt/?ID=typingguru_site',
            method: 'get'
        }).then((res)=>setviews(res.data.message)
        ).catch((err)=>console.log(err)
        );
    };
    const isDev = "production" === 'development';
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(isDev ? ()=>{
    } : increasePageView, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "flex justify-center w-full fixed bottom-0 font-ropa_sans text-primary-900 text-lg p-3",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-screen-xl w-full flex justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        ' ',
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://progman.in",
                            className: "flex",
                            children: "Progman"
                        })
                    ]
                }),
                views !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        "Total Visits: ",
                        views
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;