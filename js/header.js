      (function () {
        if (/Microsoft/.test(navigator.appName)) { return }

        window.onload = function () {
          var headers = document.querySelectorAll('#docs h2, #guide h1');
          var menu = document.getElementById('site-navigation');
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
