<?php

/* メニュー設定 */
register_nav_menus(
    [
        'place_global' => 'グローバル',
        'place_footer' => 'フッターナビ'
    ]
);

add_theme_support('post-thumbnails');

/* 設定報取得取得用API */
function get_blog_info_api()
{
    register_rest_route('bloginfo', '/get', [
        'methods' => 'GET',
        'callback' => 'get_blog_info',
    ]);
}
add_action('rest_api_init', 'get_blog_info_api');

/* 設定報取得 */
function get_blog_info()
{
    return [
        'title' => get_bloginfo('name'),
        'description' => get_bloginfo('description')
    ];
}

/* ヘッダーメニュー取得用API */
function get_header_menu_api()
{
    register_rest_route('header', '/menu/get', [
        'methods' => 'GET',
        'callback' => 'get_header_menu',
    ]);
}
add_action('rest_api_init', 'get_header_menu_api');

/* ヘッダーのメニュー一覧取得 */
function get_header_menu()
{
    $headerMenuList = wp_get_nav_menu_items('global');

    $responseList = [];
    foreach ($headerMenuList as $headerMenu) {
        array_push($responseList, [
            'id' => $headerMenu->ID,
            'objectId' => $headerMenu->object_id,
            'title' => $headerMenu->title,
            'pageType' => $headerMenu->type_label, // 固定ページ、カテゴリー、投稿
        ]);
    }
    return $responseList;
}

/* フッターメニュー取得用API */
function get_footer_menu_api()
{
    register_rest_route('footer', '/menu/get', [
        'methods' => 'GET',
        'callback' => 'get_footer_menu',
    ]);
}
add_action('rest_api_init', 'get_footer_menu_api');

/* フッターメニュー一覧取得 */
function get_footer_menu()
{
    $footerMenuList = wp_get_nav_menu_items('footernav');

    $responseList = [];
    foreach ($footerMenuList as $footerMenu) {
        array_push($responseList, [
            'id' => $footerMenu->ID,
            'objectId' => $footerMenu->object_id,
            'title' => $footerMenu->title,
            'pageType' => $footerMenu->type_label, // 固定ページ、カテゴリー、投稿
        ]);
    }
    return $responseList;
}

/* 親IDに紐づく子ページ一覧取得API */
function get_children_page_api()
{
    register_rest_route('page', '/children/get/(?P<parentId>\d+)', [
        'methods' => 'GET',
        'callback' => 'get_children_page',
    ]);
}
add_action('rest_api_init', 'get_children_page_api');

/* 親IDに紐づく子ページ一覧取得 */
function get_children_page($params)
{
    $queryResult = new WP_Query([
        'posts_per_page' => -1,
        'post_type' => 'page',
        'orderby' => 'menu_order',
        'order' => 'ASC',
        'post_parent' => $params['parentId']
    ]);

    $thumbnailList = [];
    if ($queryResult->have_posts()) {
        while ($queryResult->have_posts()) {
            $queryResult->the_post();
            array_push($thumbnailList, get_the_post_thumbnail());
        }
    }

    $childrenPageList = [];
    foreach ($queryResult->posts as $key => $pages) {
        array_push($childrenPageList, [
            'id' => $pages->ID,
            'title' => $pages->post_title,
            'content' => $pages->post_content,
            'excerpt' => $pages->post_excerpt,
            'pageType' => $pages->post_type,
            'postDate' => $pages->post_date,
            'image' => $thumbnailList[$key],
        ]);
    }

    return $childrenPageList;
}
