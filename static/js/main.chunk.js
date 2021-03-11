(this["webpackJsonphmachi"] = this["webpackJsonphmachi"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_layouts_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/layouts/header */ "./src/pages/layouts/header.tsx");
/* harmony import */ var _pages_layouts_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/layouts/menu */ "./src/pages/layouts/menu.tsx");
/* harmony import */ var _pages_layouts_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/layouts/main */ "./src/pages/layouts/main.tsx");
/* harmony import */ var _pages_layouts_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/layouts/footer */ "./src/pages/layouts/footer.tsx");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\App.tsx";








const App = () => {
  const [isDispMenu, setIsDispMenu] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pages_layouts_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isDispMenu: isDispMenu,
    setIsDispMenu: setIsDispMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pages_layouts_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDispMenu: isDispMenu,
    setIsDispMenu: setIsDispMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pages_layouts_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pages_layouts_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/common/const.tsx":
/*!******************************!*\
  !*** ./src/common/const.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let Const;

(function (_Const) {
  const MAX_GET_PROCESS_CNT = _Const.MAX_GET_PROCESS_CNT = 3;
  const WEB_BASE_URL = _Const.WEB_BASE_URL = "/wordpress";
  const API_BASE_URL = _Const.API_BASE_URL = "http://localhost/wordpress/wp-json";
  const URL = _Const.URL = {
    WEB: {
      FRONT_PAGE: WEB_BASE_URL,
      PAGE: `${WEB_BASE_URL}/page`,
      CATEGORY: `${WEB_BASE_URL}/category`,
      POST: `${WEB_BASE_URL}/post`,
      INQUERY: `${WEB_BASE_URL}/inquery`
    },
    API: {
      GET_BLOG_INFO: `${API_BASE_URL}/bloginfo/get`,
      GET_HEADER_MENU: `${API_BASE_URL}/header/menu/get`,
      GET_FOOTER_MENU: `${API_BASE_URL}/footer/menu/get`,
      GET_PAGE_CONTENT: `${API_BASE_URL}/wp/v2/pages/`,
      GET_CHILDREN_PAGE: `${API_BASE_URL}/page/children/get/`,
      GET_POST_CONTENT: `${API_BASE_URL}/wp/v2/posts/`
    },
    IMAGE: {
      FAVICON: "/wordpress/wp-content/themes/hmachi/assets/images/favicon.ico"
    }
  };
  const STR = _Const.STR = {
    PAGE: "固定ページ",
    CATEGORY: "カテゴリー",
    POST: "投稿"
  };
})(Const || (Const = {}));

/* harmony default export */ __webpack_exports__["default"] = (Const);

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\index.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})), document.getElementById("root"));
_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/pages/layouts/footer.tsx":
/*!**************************************!*\
  !*** ./src/pages/layouts/footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.tsx");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\layouts\\footer.tsx";






const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  bottom: 0;
  background-color: black;
  width: 100%;
`;
const FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;
const FooterLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  float: left;
  padding: 30px;
  color: #fff;
`;
const FooterIconLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  color: #fff;
  text-decoration: none;
`;
const FooterIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  vertical-align: middle;
`;
const FooterTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  color: #ddd;
  padding-left: 10px;
`;
const FooterRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  float: right;
  padding: 10px 30px 10px 0px;

  @media screen and (max-width: 800px) {
    clear: both;
  }
`;
const FooterMenuRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 250px;
  border-bottom: 1px solid #aaa;
  &:hover {
    border-bottom: 1px solid #0bd;
  }
`;
const FooterLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  padding: 15px 0px 0px 0px;
  display: block;
  font-size: 10pt;
  width: 100%;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #0bd;
  }
`;
const CopyrightRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  color: #fff;
  text-align: center;
  padding: 5px 0px;
`;

/* 設定情報取得 */
const getBlogInfoProcess = async processCnt => {
  let blogInfo = {
    title: "",
    description: ""
  };
  await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.API.GET_BLOG_INFO).then(response => {
    blogInfo = response.data;
  }).catch(async error => {
    console.log(error);
    processCnt -= 1;
    processCnt === 0 ? alert("設定情報取得失敗") : await getBlogInfoProcess(processCnt);
  });
  return blogInfo;
};
/* フッターメニュー一覧取得 */


const getFooterMenuProcess = async processCnt => {
  let footerMenuData = [];
  await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.API.GET_FOOTER_MENU).then(response => {
    footerMenuData = response.data;
  }).catch(async error => {
    console.log(error);
    processCnt -= 1;
    processCnt === 0 ? alert("メニュー一覧失敗") : await getFooterMenuProcess(processCnt);
  });
  return footerMenuData;
};

const Footer = () => {
  const [blogInfo, setBlogInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: "",
    description: ""
  });
  const [footerMenuList, setFooterMenuList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getBlogInfo();
    getFooterMenu();
  }, []);

  const getBlogInfo = async () => {
    setBlogInfo(await getBlogInfoProcess(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].MAX_GET_PROCESS_CNT));
  };

  const getFooterMenu = async () => {
    setFooterMenuList(await getFooterMenuProcess(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].MAX_GET_PROCESS_CNT));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterLeft, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterIconLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].WEB_BASE_URL}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterIcon, {
    src: _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.IMAGE.FAVICON,
    alt: "hmachi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, blogInfo.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterRight, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, footerMenuList.map(footerMenu => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterMenuRow, {
    key: footerMenu.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, footerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].STR.PAGE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.WEB.PAGE}/${footerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, footerMenu.title) : footerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].STR.CATEGORY ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.WEB.CATEGORY}/${footerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, footerMenu.title) : footerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].STR.POST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FooterLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.WEB.POST}/${footerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, footerMenu.title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CopyrightRow, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, "\xA9 2021 hmachi.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/pages/layouts/header.tsx":
/*!**************************************!*\
  !*** ./src/pages/layouts/header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.tsx");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\layouts\\header.tsx";






const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 10px 0px 15px 0px;
  position: fixed;
  z-index: 10;
  background-color: #fff;
`;
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;
const HeaderLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  float: left;
  padding: 5px 0px 0px 10px;
`;
const HeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  float: right;
  padding: 0px 10px;
  margin-top: 5px;
`;
const DispMenuWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: block;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const DispMenuIconWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
const HeaderItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  float: left;
  margin-right: 30px;
  text-decoration: none;
`;
const HeaderLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 11pt;
  &:hover {
    color: #0bd;
    border-bottom: 1px solid #0bd;
  }
`;
const HeaderIconLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])`
  text-decoration: none;
`;
const HeaderIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img`
  vertical-align: middle;
`;
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  padding-left: 5px;
  color: black;
  font-weight: bold;
`;

/* 設定情報取得 */
const getBlogInfoProcess = async processCnt => {
  let blogInfo = {
    title: "",
    description: ""
  };
  await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.API.GET_BLOG_INFO).then(response => {
    blogInfo = response.data;
  }).catch(async error => {
    console.log(error);
    processCnt -= 1;
    processCnt === 0 ? alert("設定情報取得失敗") : await getBlogInfoProcess(processCnt);
  });
  return blogInfo;
};
/* ヘッダーメニュー一覧取得 */


const getHeaderMenuProcess = async processCnt => {
  let headerMenuList = [];
  await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.API.GET_HEADER_MENU).then(response => {
    headerMenuList = response.data;
  }).catch(async error => {
    console.log(error);
    processCnt -= 1;
    processCnt === 0 ? alert("メニュー一覧失敗") : await getHeaderMenuProcess(processCnt);
  });
  return headerMenuList;
};

const Header = props => {
  const [blogInfo, setBlogInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: "",
    description: ""
  });
  const [headerMenuList, setHeaderMenuList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getBlogInfo();
    getheaderMenu();
  }, []);

  const getBlogInfo = async () => {
    setBlogInfo(await getBlogInfoProcess(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].MAX_GET_PROCESS_CNT));
  };

  const getheaderMenu = async () => {
    setHeaderMenuList(await getHeaderMenuProcess(_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].MAX_GET_PROCESS_CNT));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderLeft, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderIconLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].WEB_BASE_URL}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderIcon, {
    src: _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.IMAGE.FAVICON,
    alt: "hmachi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, blogInfo.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderRight, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DispMenuWrap, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, headerMenuList.map(headerMenu => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderItem, {
    key: headerMenu.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, headerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].STR.PAGE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.WEB.PAGE}/${headerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, headerMenu.title) : headerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].STR.CATEGORY ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.WEB.CATEGORY}/${headerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, headerMenu.title) : headerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_4__["default"].STR.POST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderLink, {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_4__["default"].URL.WEB.POST}/${headerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, headerMenu.title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DispMenuIconWrap, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, "\u30E1\u30CB\u30E5\u30FC"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/pages/layouts/main.tsx":
/*!************************************!*\
  !*** ./src/pages/layouts/main.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _main_front_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/front-page */ "./src/pages/main/front-page.tsx");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main/page */ "./src/pages/main/page.tsx");
/* harmony import */ var _main_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main/category */ "./src/pages/main/category.tsx");
/* harmony import */ var _main_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main/post */ "./src/pages/main/post.tsx");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.tsx");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\layouts\\main.tsx";



 // トップページ

 // 固定ページ

 // カテゴリーページ

 // 投稿ページ


const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  top: 56px;
  position: relative;
`;

const Main = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: _common_const__WEBPACK_IMPORTED_MODULE_7__["default"].URL.WEB.FRONT_PAGE,
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_main_front_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${_common_const__WEBPACK_IMPORTED_MODULE_7__["default"].URL.WEB.PAGE}/:pageId`,
    render: routeProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_main_page__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, routeProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 35
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${_common_const__WEBPACK_IMPORTED_MODULE_7__["default"].URL.WEB.CATEGORY}/:categoryId`,
    render: routeProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_main_category__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, routeProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 35
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: `${_common_const__WEBPACK_IMPORTED_MODULE_7__["default"].URL.WEB.POST}/:postId`,
    render: routeProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_main_post__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, routeProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 35
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: _common_const__WEBPACK_IMPORTED_MODULE_7__["default"].URL.WEB.FRONT_PAGE,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/pages/layouts/menu.tsx":
/*!************************************!*\
  !*** ./src/pages/layouts/menu.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.tsx");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\layouts\\menu.tsx";






/* ヘッダーメニュー一覧取得 */
const getHeaderMenuProcess = async processCnt => {
  let headerMenuList = [];
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_common_const__WEBPACK_IMPORTED_MODULE_3__["default"].URL.API.GET_HEADER_MENU).then(response => {
    headerMenuList = response.data;
  }).catch(async error => {
    console.log(error);
    processCnt -= 1;
    processCnt === 0 ? alert("メニュー一覧失敗") : await getHeaderMenuProcess(processCnt);
  });
  return headerMenuList;
};

const Menu = props => {
  const [headerMenuList, setHeaderMenuList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getheaderMenu();
  }, []);
  /* フッターメニュー一覧取得 */

  const getheaderMenu = async () => {
    setHeaderMenuList(await getHeaderMenuProcess(_common_const__WEBPACK_IMPORTED_MODULE_3__["default"].MAX_GET_PROCESS_CNT));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, props.isDispMenu ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, headerMenuList.map(headerMenu => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: headerMenu.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, headerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_3__["default"].STR.PAGE ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_3__["default"].URL.WEB.PAGE}/${headerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, headerMenu.title) : headerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_3__["default"].STR.CATEGORY ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_3__["default"].URL.WEB.CATEGORY}/${headerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, headerMenu.title) : headerMenu.pageType == _common_const__WEBPACK_IMPORTED_MODULE_3__["default"].STR.POST ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `${_common_const__WEBPACK_IMPORTED_MODULE_3__["default"].URL.WEB.POST}/${headerMenu.objectId}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, headerMenu.title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/pages/main/category.tsx":
/*!*************************************!*\
  !*** ./src/pages/main/category.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\main\\category.tsx";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
`;

const process = async url => {
  // TODO カテゴリIDに紐づくカテゴリデータ一覧の取得
  // wp rest apiにパラメータを渡す
  let data = null;
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(response => {
    console.log(response);
    data = response;
  }).catch(async error => {
    console.log(error);
  });
  return data;
};
/* カテゴリーページ */


const Category = props => {
  const [dom, setDom] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "\u30AB\u30C6\u30B4\u30EA\u30FC\u30DA\u30FC\u30B8", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    dangerouslySetInnerHTML: {
      __html: dom
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/pages/main/front-page.tsx":
/*!***************************************!*\
  !*** ./src/pages/main/front-page.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\main\\front-page.tsx";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: 10px;
`;

const process = async url => {
  let data = null;
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(response => {
    console.log(response);
    data = response;
  }).catch(async error => {
    console.log(error);
  });
  return data;
};
/* トプページ */


const FrontPage = () => {
  const [dom, setDom] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u30D5\u30ED\u30F3\u30C8\u30DA\u30FC\u30B8", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    dangerouslySetInnerHTML: {
      __html: dom
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FrontPage);

/***/ }),

/***/ "./src/pages/main/page.tsx":
/*!*********************************!*\
  !*** ./src/pages/main/page.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.tsx");
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\main\\page.tsx";





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: 20px 10px;
  max-width: 800px;
  margin: 0 auto;

  img {
    max-width: 800px;
    width: auto;
    height: auto;
  }
`;

/* 固定ページの内容取得 */
const getPageContentProcess = async (pageId, processCnt) => {
  let pageContentData = {
    id: 0,
    title: {
      rendered: ""
    },
    content: {
      rendered: ""
    },
    type: ""
  };
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_common_const__WEBPACK_IMPORTED_MODULE_3__["default"].URL.API.GET_PAGE_CONTENT + pageId).then(response => {
    console.log(response.data);
    pageContentData = response.data;
  }).catch(async error => {
    console.log(error);
    processCnt -= 1;
    processCnt === 0 ? alert("ページデータ取得失敗") : await getPageContentProcess(pageId, processCnt);
  });
  return pageContentData;
};
/* 子ページ一覧取得 */


const getChildrenPageProcess = async (pageId, processCnt) => {
  let childrenPageList = [];
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_common_const__WEBPACK_IMPORTED_MODULE_3__["default"].URL.API.GET_CHILDREN_PAGE + pageId).then(response => {
    console.log(response.data);
    childrenPageList = response.data;
  }).catch(async error => {
    console.log(error);
    processCnt -= 1;
    processCnt === 0 ? alert("子ページ一覧取得失敗") : await getChildrenPageProcess(pageId, processCnt);
  });
  return childrenPageList;
};
/* 固定ページ */


const Page = props => {
  const [pageContent, setPageContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: 0,
    title: {
      rendered: ""
    },
    content: {
      rendered: ""
    },
    type: ""
  });
  const [childrenPageList, srtChildrenPageList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPageContent();
    getChildrenPage();
  }, [props.match.params.pageId]);

  const getPageContent = async () => {
    setPageContent(await getPageContentProcess(Number(props.match.params.pageId), _common_const__WEBPACK_IMPORTED_MODULE_3__["default"].MAX_GET_PROCESS_CNT));
  };

  const getChildrenPage = async () => {
    srtChildrenPageList(await getChildrenPageProcess(Number(props.match.params.pageId), _common_const__WEBPACK_IMPORTED_MODULE_3__["default"].MAX_GET_PROCESS_CNT));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, childrenPageList.length == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    dangerouslySetInnerHTML: {
      __html: pageContent.content.rendered
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, childrenPageList.map(childrenPage => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: childrenPage.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    dangerouslySetInnerHTML: {
      __html: childrenPage.image
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, childrenPage.title)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/pages/main/post.tsx":
/*!*********************************!*\
  !*** ./src/pages/main/post.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\wordpress\\wp-content\\themes\\hmachi\\react-src\\src\\pages\\main\\post.tsx";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
`;

const process = async url => {
  let data = null;
  await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(response => {
    console.log(response);
    data = response;
  }).catch(async error => {
    console.log(error);
  });
  return data;
};
/* 投稿ページ */


const Post = props => {
  const [dom, setDom] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "\u6295\u7A3F\u30DA\u30FC\u30B8", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    dangerouslySetInnerHTML: {
      __html: dom
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\wordpress\wp-content\themes\hmachi\react-src\src\index.tsx */"./src/index.tsx");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map