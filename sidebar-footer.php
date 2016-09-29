<?php

/**
 * The footer widget area is triggered if any of the areas
 * have widgets.
 *
 * If none of the sidebars have widgets, bail early.
 */
if (!is_active_sidebar('first-footer-widget-area') && !is_active_sidebar('second-footer-widget-area') && !is_active_sidebar('third-footer-widget-area') && !is_active_sidebar('fourth-footer-widget-area')
):
  return;
endif;

?>
<?php if (is_active_sidebar('first-footer-widget-area')) : ?>

  <div id="first" class="span12">
    <?php dynamic_sidebar('first-footer-widget-area'); ?>
  </div><!-- #first .widget-area -->

<?php endif; ?>
<?php if (is_active_sidebar('second-footer-widget-area')) : ?>

  <div id="second" class="span4">
    <?php dynamic_sidebar('second-footer-widget-area'); ?>
  </div><!-- #second .widget-area -->

<?php endif; ?>

<?php if (is_active_sidebar('third-footer-widget-area')) : ?>

  <div id="third" class="span4">
    <?php dynamic_sidebar('third-footer-widget-area'); ?>
  </div><!-- #third .widget-area -->

<?php endif; ?>

<?php if (is_active_sidebar('fourth-footer-widget-area')) : ?>
  <div id="fourth" class="span4">

    <?php dynamic_sidebar('fourth-footer-widget-area'); ?>
  </div><!-- #fourth .widget-area -->

<?php endif; ?>