<?php

function chronicles_setup() {
    // This theme uses wp_nav_menu() in one location.
    register_nav_menu( 'side', __( 'Side Menu', 'twentythirteen' ) );
}
add_action( 'after_setup_theme', 'chronicles_setup' );


wp_enqueue_script( 'chronicles-script', get_template_directory_uri() . '/../chronicles/js/header.js', array( 'jquery' ), '20130212', true );

?>
