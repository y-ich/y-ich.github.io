// Generated by CoffeeScript 1.3.1
(function() {
  var ge, ge_ready, kmlFinishedLoading, start, yt_head, yt_ready, ytplayer;

  ytplayer = null;

  ge = null;

  yt_ready = false;

  ge_ready = false;

  yt_head = true;

  window.onYouTubePlayerReady = function(playerId) {
    ytplayer = document.getElementById("myytplayer");
    if (ytplayer.addEventListener != null) {
      ytplayer.addEventListener('onStateChange', 'onytplayerStateChange');
    }
    if (ytplayer.attachEvent != null) {
      ytplayer.attachEvent('onStateChange', 'onytplayerStateChange');
    }
    yt_ready = true;
    return start();
  };

  window.onytplayerStateChange = function(newState) {
    var player;
    player = ge.getTourPlayer();
    switch (newState) {
      case 0:
        player.setCurrentTime(0);
        return yt_head = true;
      case 1:
        if (yt_head) {
          yt_head = false;
        } else {
          player.setCurrentTime(ytplayer.getCurrentTime());
        }
        return player.play();
      case 2:
        return player.pause();
      case 3:
        return player.pause();
      case 5:
        player.setCurrentTime(0);
        return yt_head = true;
    }
  };

  start = function() {
    if (yt_ready && ge_ready) {
      return ytplayer.playVideo();
    }
  };

  kmlFinishedLoading = function(kml) {
    if (kml == null) {
      alert('kml load error');
      return;
    }
    ge.getFeatures().appendChild(kml);
    window.kml = kml;
    return walkKmlDom(kml, function() {
      if (this.getType() === 'KmlTour') {
        ge.getTourPlayer().setTour(this);
        ge_ready = true;
        start();
        return false;
      }
    });
  };

  window.onload = function() {
    return swfobject.embedSWF("http://www.youtube.com/v/fToTDHqEco0?enablejsapi=1&playerapiid=ytplayer", "ytapiplayer", "560", "315", "8", null, null, {
      allowScriptAccess: "always"
    }, {
      id: "myytplayer"
    });
  };

  google.setOnLoadCallback(function() {
    var fetchKml;
    google.earth.createInstance('map3d', function(instance) {
      ge = instance;
      ge.getWindow().setVisibility(true);
      return ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS, true);
    }, function() {});
    fetchKml = function() {
      try {
        return google.earth.fetchKml(ge, location.href.replace('html', 'kml'), kmlFinishedLoading);
      } catch (error) {
        console.log(error);
        return setTimeout(fetchKml, 100);
      }
    };
    return setTimeout(fetchKml, 100);
  });

}).call(this);
