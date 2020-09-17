/*!
 * GRT Youtube Popup - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
 */
(function ($) {
  $.fn.grtyoutube = function (options) {
    return this.each(function () {
      // Get video ID
      var getvideoid = $(this).attr("youtubeid");

      // Default options
      var settings = $.extend(
        {
          videoID: getvideoid,
          autoPlay: true,
          theme: "dark",
        },
        options
      );

      // Convert some values
      if (settings.autoPlay === true) {
        settings.autoPlay = 1;
      } else if (settings.autoPlay === false) {
        settings.autoPlay = 0;
      }
      if (settings.theme === "dark") {
        settings.theme = "grtyoutube-dark-theme";
      } else if (settings.theme === "light") {
        settings.theme = "grtyoutube-light-theme";
      }

      // Initialize on click
      if (getvideoid) {
        $(this).on("click", function () {
          $("body").append(
            '<div class="grtyoutube-popup ' +
              settings.theme +
              '">' +
              '<div class="grtyoutube-popup-content">' +
              '<span class="grtyoutube-popup-close"></span>' +
              '<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/' +
              settings.videoID +
              "?rel=0&wmode=transparent&autoplay=" +
              settings.autoPlay +
              '&iv_load_policy=3" allowfullscreen frameborder="0" allow="autoplay; fullscreen"></iframe>' +
              "</div>" +
              "</div>"
          );
        });
      }

      // Close the box on click or escape
      $(this).on("click", function (event) {
        event.preventDefault();
        $(".grtyoutube-popup-close, .grtyoutube-popup").click(function () {
          $(".grtyoutube-popup").remove();
        });
      });

      $(document).keyup(function (event) {
        if (event.keyCode == 27) {
          $(".grtyoutube-popup").remove();
        }
      });
    });
  };
})(jQuery);

$(".youtube-link").grtyoutube();

// On click scroll behaviors
$(".work").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".video-container").offset().top,
    },
    500
  );
});

$(".arrow").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".video-container").offset().top,
    },
    500
  );
});

$(".logo").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".frontpage").offset().top,
    },
    750
  );
});

$(".arrow-top").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".frontpage").offset().top,
    },
    750
  );
});

$(".about").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".about-me").offset().top,
    },
    750
  );
});

// Formspree contact form

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks for your email.";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


// Contact form textarea resize based on line amount
$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});