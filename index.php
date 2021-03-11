<?php
$TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">

<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

  <meta charset="utf-8" />
  <link rel="shortcut icon" href="/wordpress/wp-content/themes/hmachi/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-wptheme" />
  <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
  <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
  <link rel="stylesheet" href="/wordpress/wp-content/themes/hmachi/assets/css/app.css">
  <title><?php bloginfo('name'); ?></title>
  <?php wp_head(); ?>
</head>

<body>
  <div class="wrapper">
    <div id="root"></div>
    <?php wp_footer(); ?>
  </div>

<script src="/wordpress/wp-content/themes/hmachi/static/js/bundle.js?7db368eb9de3c244e163"></script><script src="/wordpress/wp-content/themes/hmachi/static/js/0.chunk.js?7db368eb9de3c244e163"></script><script src="/wordpress/wp-content/themes/hmachi/static/js/main.chunk.js?7db368eb9de3c244e163"></script></body>

</html>