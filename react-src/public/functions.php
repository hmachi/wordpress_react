<?php

/* メニュー設定 */
register_nav_menus(
    [
        'place_global' => 'グローバル',
        'place_footer' => 'フッターナビ'
    ]
);

/* 設定報取得取得用API */
function get_blog_info_api()
{
    register_rest_route('bloginfo/v1', '/get', [
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
    register_rest_route('header/v1', '/menu/get', [
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
    register_rest_route('footer/v1', '/menu/get', [
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
