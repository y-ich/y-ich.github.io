/*
 * original: http://html-five.jp/402/
 * changed by ICHIKAWA, Yuji
 * Copyright (C) 2012 ICHIKAWA, Yuji (New 3 Rs)
 */

(function () {
  var saddr = null; // geoQueryでnullにしているので、nullの初期化は不要なはずだが、一度、undefinedでpollingが通過したことがあるので初期化。

  function mapURL(address) {
    return 'http://maps.google.co.jp/maps?saddr=' + encodeURIComponent(saddr) + '&daddr=' + encodeURIComponent(address);
  }

  window.geoQuery = function (callback) {
    saddr = null;

    function handleNoGeolocation(errorFlag,error) {
      if (errorFlag == true) {
        console.log("現在位置取得サービスがエラーを返しました\n"+
            'コード: '    + error.code    + '\n' +
            'メッセージ: ' + error.message + '\n');
      } else {
        console.log("現在位置取得機能がございません。代わりに川崎市岡本太郎美術館からの経路を表示します。");
      }
      saddr = '川崎市岡本太郎美術館';
    }

    // 現在地取得
    // Try W3C Geolocation (Preferred)
    if (navigator.geolocation) {
      browserSupportGetlocationFlag = true;
      navigator.geolocation.getCurrentPosition(
        function (position) {
          saddr = position.coords.latitude + ',' + position.coords.longitude;
          if (typeof callback === 'function') callback();
        },
        function (error) {
          handleNoGeolocation(browserSupportGetlocationFlag,error);
          if (typeof callback === 'function') callback();
        },
        {enableHighAccuracy:true} // androidはこのオプションが必要
      );
    }
    else {
      browserSupportGetlocationFlag = false;
      handleNoGeolocation(browserSupportGetlocationFlag,false);
      if (typeof callback === 'function') callback();
    }
  };

  window.pollAndUrlTo = function (address) {
    var d1 = new Date().getTime(); 
    var d2 = new Date().getTime();
    var timeout = 10;

    while(d2 < d1 + timeout * 1000) {
      if (saddr !== null)
          break;
      d2 = new Date().getTime(); 
    } 
    if (saddr === null) {
      event.preventDefault();
      return '#';
    }
    else {
      return mapURL(address);
    }
  };

  window.jumpTo = function (address) {
    geoQuery(function () {
      location.href = mapURL(address);
    });
  };
})();
