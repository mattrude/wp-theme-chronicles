      (function () {
        if (/Microsoft/.test(navigator.appName)) { return }

        window.onload = function () {
          var headers = document.querySelectorAll('#docs h2, #guide h1');
          var menu = document.getElementById('main-menu');
          var init = menu.offsetTop;
          var docked;

          for (var i = 0; i < headers.length; i++) {
            headers[i].id = '-' + headers[i].innerHTML.toLowerCase().replace(/ /g, '-');
          }

          window.onscroll = function () {
            if (!docked && (menu.offsetTop - scrollTop() < 0)) {
              menu.style.top = 0;
              menu.style.position = 'fixed';
              menu.className = 'docked navigation main-navigation';
              docked = true;
            } else if (docked && scrollTop() <= init) {
              menu.style.position = 'absolute';
              menu.style.top = init + 'px';
              menu.className = menu.className.replace('docked ', '');
              docked = false;
            }
          };
        };

        function scrollTop() {
          return document.body.scrollTop || document.documentElement.scrollTop;
        }
      })();

var $jquery = jQuery.noConflict();
$jquery(document).ready(function() {
 
  $jquery('div.menu-header-menu-container > li div ul li').has('ul').prepend('<span class="toggleNav minusNav"></span>');
 
  $jquery('div.menu-header-menu-container > li div ul li:not(.current-menu-item):not(.current-menu-ancestor)').has('ul').children('ul').hide();
 
  $jquery('div.menu-header-menu-container > li div ul li:not(.current-menu-item):not(.current-menu-ancestor) span.toggleNav').removeClass("minusNav").addClass("plusNav");
 
  $jquery('span.toggleNav').click(function () {
    if ($jquery(this).hasClass("plusNav")) {
      $jquery(this).removeClass("plusNav").addClass("minusNav");
      $jquery(this).parent().children('ul').slideDown();
    } else {
      $jquery(this).removeClass("minusNav").addClass("plusNav");
      $jquery(this).parent().children('ul').slideUp();
    }
  });
 
});
