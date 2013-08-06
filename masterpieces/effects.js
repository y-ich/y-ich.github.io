(function() {
  var $body, $caption, $container, $highres, $info, LANG, author, captionTimer, effectTimer, focus, imgs, p, spinner, _ref, _ref1;

  LANG = ((_ref = navigator.userLanguage) != null ? _ref : navigator.language).slice(0, 2);

  author = {
    "default": 'Vermeer',
    ja: 'フェルメール'
  };

  $body = $(document.body);

  $info = $('#info');

  $container = $('#container');

  $caption = $('#caption');

  $highres = null;

  focus = null;

  spinner = {
    spinner: new Spinner({
      lines: 13,
      length: 3,
      width: 2,
      radius: 5,
      corners: 1,
      rotate: 0,
      color: '#fff',
      speed: 1,
      trail: 60,
      shadow: false,
      hwaccel: false,
      className: 'spinner',
      zIndex: 2e9,
      top: 'auto',
      left: 'auto'
    }),
    $spinner: $('#spinner'),
    start: function() {
      spinner.$spinner.css('display', 'block');
      return spinner.spinner.spin(spinner.$spinner[0]);
    },
    stop: function() {
      spinner.spinner.stop();
      return spinner.$spinner.css('display', '');
    }
  };

  $('title').text((_ref1 = author[LANG]) != null ? _ref1 : author['default']);

  imgs = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = pictures.length; _i < _len; _i++) {
      p = pictures[_i];
      _results.push($("<img class=\"my-thumbnail\" src=\"" + p.small + "\" />").data('info', p));
    }
    return _results;
  })();

  $container.append(imgs);

  $('.my-thumbnail').click(function() {
    var $image, $this, offset, scale, translateX, translateY, _ref2;
    if (focus != null) {
      return;
    }
    $this = $(this);
    focus = $this.data('info');
    $image = $("<img class=\"horizontal-center\" src=\"" + ((_ref2 = focus.large) != null ? _ref2 : focus.normal) + "\">");
    $image.data('deferred', $.Deferred(function() {
      return this.then(spinner.stop);
    }));
    $image.on('load', function() {
      return $(this).data('deferred').resolve();
    });
    spinner.start();
    $container.data('deferred', $.Deferred());
    $container.one($s.vendor.transitionend, function() {
      return $(this).data('deferred').resolve();
    });
    offset = $this.offset();
    if ($this.width() / $this.height() < innerWidth / innerHeight) {
      scale = innerHeight / $this.height();
      translateX = (innerWidth - $this.width() * scale) / 2 - offset.left * scale + document.body.scrollLeft;
      translateY = -offset.top * scale + document.body.scrollTop;
    } else {
      scale = innerWidth / $this.width();
      translateX = -offset.left * scale + document.body.scrollLeft;
      translateY = (innerHeight - $this.height() * scale) / 2 - offset.top * scale + document.body.scrollTop;
    }
    $container.css('transform', "translate(" + translateX + "px, " + translateY + "px) scale(" + scale + ")");
    return $.when($image.data('deferred'), $container.data('deferred')).then(function() {
      var frame;
      frame = 50;
      $highres = $("<div id=\"highres-frame\" class=\"vertical-center\" style=\"width: " + (innerWidth + frame * 2) + "px; height: " + (innerHeight + frame * 2) + "px; left: " + (document.body.scrollLeft - frame) + "px; top: " + (document.body.scrollTop - frame) + "px; opacity: 0\"></div>");
      if ($image[0].naturalWidth / $image[0].naturalHeight < innerWidth / innerHeight) {
        $image.attr('height', innerHeight.toString());
      } else {
        $image.attr('width', innerWidth.toString());
      }
      $highres.append($('<div>').append($image));
      $highres.on('click', function() {
        if ($caption.is(':visible')) {
          return;
        }
        return $(this).one($s.vendor.transitionend, function() {
          $(this).remove();
          $highres = null;
          $container.css('transform', '');
          focus = null;
          return $info.css('opacity', '');
        }).css('opacity', '0');
      });
      $body.append($highres);
      setTimeout((function() {
        $highres.css('opacity', '1');
        return $highres.one($s.vendor.transitionend, function() {
          return $info.css('opacity', '0.5');
        });
      }), 0);
      return $image = null;
    });
  });

  captionTimer = null;

  effectTimer = null;

  $info.click(function() {
    var $image, captionTime, effectTime, origin;
    if (focus == null) {
      return;
    }
    captionTime = 20;
    effectTime = 15;
    if (captionTimer != null) {
      clearTimeout(captionTimer);
      captionTimer = null;
      if (effectTimer != null) {
        clearTimeout(effectTimer);
      }
      effectTimer = null;
      $caption.one($s.vendor.transitionend, function() {
        return $(this).css('display', 'none');
      });
      $caption.css('opacity', '');
      return $highres.css({
        'transform': '',
        'transform-origin': '',
        'transition': ''
      });
    } else {
      if ('focus' in focus) {
        $image = $highres.find('img');
        origin = {
          left: $image.position().left + parseInt($image.css('margin-left')) + $image.width() * focus.focus[0],
          top: $image.position().top + parseInt($image.css('margin-top')) + $image.height() * focus.focus[1]
        };
        $highres.css({
          'transform': '',
          'transform-origin': "" + origin.left + "px " + origin.top + "px",
          'transition': $s.vendor.prefix + ("transform " + effectTime + "s")
        });
        effectTimer = setTimeout((function() {
          $highres.css('transform', "translate(" + (innerWidth / 2 - origin.left) + "px, " + (innerHeight / 2 - origin.top) + "px) scale(2)");
          $highres.one($s.vendor.transitionend, function() {
            return $highres.css({
              'transform': '',
              'transform-origin': '',
              'transition': ''
            });
          });
          return effectTimer = null;
        }), (captionTime - effectTime) * 1000);
      }
      $caption.children().html(("\"" + focus.title[LANG in focus.title ? LANG : 'en'] + "\"<br>") + (('comment' in focus) && (LANG in focus.comment) ? focus.comment[LANG] : ''));
      $caption.css('display', 'block');
      setTimeout((function() {
        return $caption.css('opacity', '0.8');
      }), 0);
      return captionTimer = setTimeout((function() {
        captionTimer = null;
        $caption.one($s.vendor.transitionend, function() {
          return $(this).css('display', 'none');
        });
        return $caption.css('opacity', '');
      }), captionTime * 1000);
    }
  });

}).call(this);
