</div> <!-- /container -->

<?php do_action('cookie_bar'); ?>

<?php
global $options;
foreach ($options as $value) {
  if (array_key_exists('id', $value)) {
    if (get_option($value['id']) === FALSE) {
      if (array_key_exists('std', $value)) {
        if (version_compare(PHP_VERSION, '7.0.0', '>=')) {
          ${$value['id']} = $value['std'] or NULL;
        } else {
          $$value['id'] = $value['std'] or NULL;
        }
      }
    } else {
      if (version_compare(PHP_VERSION, '7.0.0', '>=')) {
        ${$value['id']} = get_option($value['id']);
      } else {
        $$value['id'] = get_option($value['id']);
      }
    }
  }
}
if ($okfn_mailinglist_bar_location == "footer") {
  include('mailing-bar.php');
}
?>
<footer>
  <div class="inner">
    <div class="container">
      <div class="row">
        <?php get_sidebar('footer'); ?>
      </div>
    </div><!-- /container -->
  </div><!-- /inner -->
</footer>
<?php wp_footer(); ?>
</body>
</html>
