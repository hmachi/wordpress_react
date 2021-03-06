namespace Const {
  export const MAX_GET_PROCESS_CNT = 3;

  export const WEB_BASE_URL = "/wordpress";
  export const API_BASE_URL = "http://localhost/wordpress/wp-json";
  export const URL = {
    WEB: {
      FRONT_PAGE: WEB_BASE_URL,
      PAGE: `${WEB_BASE_URL}/page`,
      CATEGORY: `${WEB_BASE_URL}/category`,
      POST: `${WEB_BASE_URL}/post`,
      INQUERY: `${WEB_BASE_URL}/inquery`,
    },
    API: {
      GET_BLOG_INFO: `${API_BASE_URL}/bloginfo/get`,
      GET_HEADER_MENU: `${API_BASE_URL}/header/menu/get`,
      GET_FOOTER_MENU: `${API_BASE_URL}/footer/menu/get`,
      GET_PAGE_CONTENT: `${API_BASE_URL}/wp/v2/pages/`,
      GET_CHILDREN_PAGE: `${API_BASE_URL}/page/children/get/`,
      GET_POST_CONTENT: `${API_BASE_URL}/wp/v2/posts/`,
    },
    IMAGE: {
      FAVICON: "/wordpress/wp-content/themes/hmachi/assets/images/favicon.ico",
    },
  };

  export const STR = {
    PAGE: "固定ページ",
    CATEGORY: "カテゴリー",
    POST: "投稿",
  };
}

export default Const;
