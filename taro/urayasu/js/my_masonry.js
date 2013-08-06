/*
 * my_masonry.js
 * author: ICHIKAWA, Yuji
 * Copyright (C) 2012 ICHIKAWA, Yuji (New 3 Rs)
 */

// constants

var base = 'http://dl.dropbox.com/u/8719413/y_ichikawa/taro/images/';
var works = [
    {title : 'みつめあう愛',
     year : 1990,
     place : 'ダスキン本社',
     urls : [base + 'love_gazing1.jpg',
            base + 'love_gazing2.jpg',
            base + 'love_gazing3.jpg',
            base + 'love_gazing4.jpg',
            base + 'love_gazing5.jpg']},
    {title : 'リオちゃん',
     year : 1983,
     place : '豊津公園',
     urls : [base + 'rio1.jpg',
            base + 'rio2.jpg',
            base + 'rio3.jpg',
            base + 'rio4.jpg']},
    {title : '躍動',
     year : 1981,
     place : '姫路市総合スポーツ会館',
     urls : [base + 'life_impulse1.jpg',
            base + 'life_impulse2.jpg',
            base + 'life_impulse3.jpg',
            base + 'life_impulse4.jpg',
            base + 'life_impulse5.jpg']},
    {title : '若い泉',
     year : 1974,
     place : '姫路市 バーズタウン',
     urls : [base + 'young_spring1.jpg',
            base + 'young_spring2.jpg',
            base + 'young_spring3.jpg',
            base + 'young_spring4.jpg',
            base + 'young_spring5.jpg']},
    {title : '撩乱',
    year : 1989,
    place : 'ホテルシーショア御津岬',
    urls: [base + 'blooming1.jpg',
           base + 'blooming2.jpg',
           base + 'blooming3.jpg',
           base + 'blooming4.jpg',
           base + 'blooming5.jpg',
           base + 'blooming6.jpg']},
    {title : '躍進',
     year : 1972,
     place : 'サンフェスタ岡山',
     urls : [base + 'throb1.jpg',
             base + 'throb2.jpg',
             base + 'throb3.jpg',
             base + 'throb4.jpg',
             base + 'throb5.jpg',
             base + 'throb6.jpg']},
    {title : '緑の太陽',
     year : 1969,
     place : '別所市 さとう皮膚科',
     urls : [base + 'green_sun1.jpg',
             base + 'green_sun2.jpg',
             base + 'green_sun3.jpg']},
    {title : '花炎',
     year : 1995,
     place : '歴史と文化の森公園',
     urls : [base + 'flower_fire1.jpg',
             base + 'flower_fire2.jpg',
             base + 'flower_fire3.jpg',
             base + 'flower_fire4.jpg',
             base + 'flower_fire5.jpg']},
    {title : '神話',
     year : 1982,
     place : '松江総合運動公園',
     urls : [base + 'myth1.jpg',
             base + 'myth2.jpg',
             base + 'myth3.jpg',
             base + 'myth4.jpg',
             base + 'myth5.jpg',
             base + 'myth6.jpg',
             base + 'myth7.jpg']},
    {title : 'いのち踊る',
     year : 1975,
     place : '大塚製薬徳島研究所',
     urls : [base + 'life_dances1.jpg']},
    {title : '歓び',
     year : null,
     urls : ['http://2.bp.blogspot.com/-2OnvqAGImTY/TxpoVx9U8rI/AAAAAAAARIE/Od9IYtQj8hw/s1600/%25E3%2580%258A%25E5%2596%259C%25E3%2581%25B2%25E3%2582%2599%25E3%2580%258B.PNG']},
    {title : '未来を拓(ひら)く塔',
     year : 1988,
     urls : ['http://blogimg.goo.ne.jp/user_image/45/f4/fc3996f8023836ee03bca32b5705e4d6.jpg']},
    {title : '足あと広場',
     year : 1978,
     urls : ['http://pds.exblog.jp/pds/1/201104/21/91/a0183191_12272527.jpg']},
    {title : '若い太陽の塔',
     year : 1969,
     urls : ['http://3.bp.blogspot.com/__nOgMaUJzU0/S7ifQrs6Q_I/AAAAAAAAJRc/4lFjB1RBRCA/s1600/ピクチャ+9.png']},
    {title : '夢の樹',
     year : 1983,
     urls : ['http://image.space.rakuten.co.jp/d/strg/ctrl/2/d17956e2be7c919bedaaf8b19f385b89698baa4c.86.2.2.2.jpg']},
    {title : 'こどもの樹',
     year : 1985,
     urls : ['http://image.space.rakuten.co.jp/lg01/64/0000109064/09/imge4267183lol6io.jpeg']},
    {title : '歓喜',
     year : 1965,
     urls : ['http://livedoor.blogimg.jp/sparky55/imgs/e/8/e85cc8c2.JPG']},
    {title : '天に舞',
     year : 1974,
     urls : ['http://www.new-york-art.com/old/images/o-dancing-in-the-heaven.jpg']},
    {title : '河神',
     year : 1995,
     urls : ['http://blog-imgs-26.fc2.com/h/a/r/harropage/OIRASEKEIRYUUH1.jpg']},
    {title : '太陽の塔',
     year : 1970,
     urls : ['http://blog.zaq.ne.jp/jazzvisualparadise/img/img_box/img20091126170136622.jpg']},
    {title : '明日の神話',
     year : 1968,
     urls : ['http://www.yuriko.net/travel/wp-content/uploads/2008/11/20081119212439.jpg']},
    {title : '若い時計台',
     year : 1966,
     urls : ['http://2.bp.blogspot.com/-xVkvIKjdWNw/TvGoWbzBijI/AAAAAAAAMrc/z0L_jtQupz0/s1600/R0024079.JPG']},
    {title : '午後の日',
     year : 1967,
     urls : ['http://www1.u-netsurf.ne.jp/~kitada/doc/taiyo/ohaka.jpg']},
    {title : '赤い兎',
     year : 1949,
     urls : ['http://www.artcreation.co.jp/80914-tarou-akaiusagi.JPG']},
    {title : '未来を視る',
     year : 1985,
     urls : ['http://tsukuba-style.jp/blog/2009030117040000.jpg']},
    {title : '躍動の門',
     year : 1993,
     urls : ['http://www.takenakadouki.com/cms/wp-content/uploads/04yakudonomon.jpg']},
    {title : '五大陸',
     year : 1993,
     urls : ['https://lh3.googleusercontent.com/-_rs1vSHYwec/S_t4iEpTlbI/AAAAAAAANtY/w1TiqH0ifb0/s912/IMG_1100.JPG']}
];

// global variables to avoid repeating same operations.
var $container;
var $curtain;
var spin;

$(document).on('click', 'img.image', function (e) {
    var $this = $(this);
    var $clone = $this.clone();
    var position = $this.position();
    
    $.data($clone[0], 'orig', $this);
    
    $clone.css('margin', $this.css('margin-left')) // work around. css('margin') returns '' on Safari
          .css('left', position.left + 'px')
          .css('top', position.top + 'px')
          .width($this.css('width'))
          .height($this.css('height'))
          .toggleClass('image')
          .toggleClass('active')          
          .appendTo($(document.body));
    $('#title p').text($.data(this, 'work').title);
    setTimeout(function () {
        var regionHeight = innerHeight - $('#title').height();
        $clone.one('webkitTransitionEnd', function (e) {
            $container.css('visibility', 'hidden');
            $('.cursor').toggle();
        });
        $clone.css('margin', '0px');
        if ($this[0].naturalWidth / $this[0].naturalHeight > innerWidth / regionHeight) { // landscape picture. NOTE: "this" is not available in a function for setTimeout 
            var height = innerWidth * $this[0].naturalHeight / $this[0].naturalWidth;
            $clone.width(innerWidth)
                  .height(height)
                  .css('left', $(window).scrollLeft() + 'px')
                  .css('top', $(window).scrollTop() + Math.round((regionHeight - height) / 2) + 'px');
        }
        else {
            var width = regionHeight * $this[0].naturalWidth / $this[0].naturalHeight;
            $clone.width(width)
                  .height(regionHeight)
                  .css('left', $(window).scrollLeft() + Math.round((innerWidth - width) / 2) + 'px')
                  .css('top', $(window).scrollTop() + 'px');
        }
        $curtain.css('z-index', '1').css('opacity', '1');
    },0);
});
    
$(document).on('click', 'img.active', function (e) {
    var $this = $(this);
    var $orig = $.data(this, 'orig');
    $this.one('webkitTransitionEnd', function (e) {
        $curtain.css('z-index', '-1');
        $(this).remove();
    });
    $this.css('margin', $orig.css('margin-left')) // work around. css('margin') returns '' on Safari
         .css('left', $orig.css('left'))
         .css('top', $orig.css('top'))
         .css('width', $orig.css('width'))
         .css('height', $orig.css('height'));
    $curtain.css('opacity', '0');
    $('.cursor').toggle();
    $container.css('visibility', 'visible');
});

start = function () {
    $container = $('#container');
    $curtain = $('#curtain');
    spin = new Spinner({color: '#fff'});
    
    works.forEach(function(e) {
        var $image = $('<img class="image" ' + 'src="' + e.urls[0] + '">')
        $image.appendTo($container);
        $.data($image[0], 'work', e);
    });
        
    $container.imagesLoaded(function () {
      $container.masonry({
        itemSelector : '.image',
        columnWidth : 250 // .image width + 2*margin
      });
    });
    
    cursor_handler = function (e, direction) {
        var $active = $('img.active');
        var $orig = $.data($active[0], 'orig');
        var work = $.data($orig[0], 'work');
        var current = $active.attr('src');
        var i;

        for (i = 0; i < work.urls.length; i++) {
            if (work.urls[i] == current) break;
        }
        $active.on('load', function (e) {
            var regionHeight = innerHeight - $('#title').height();
            spin.stop();

            if ($active[0].naturalWidth / $active[0].naturalHeight > innerWidth / regionHeight) { // landscape picture. NOTE: "this" is not available in a function for setTimeout 
                var height = innerWidth * $active[0].naturalHeight / $active[0].naturalWidth;
                $active.width(innerWidth)
                      .height(height)
                      .css('left', $(window).scrollLeft() + 'px')
                      .css('top', $(window).scrollTop() + Math.round((regionHeight - height) / 2) + 'px');
            }
            else {
                var width = regionHeight * $active[0].naturalWidth / $active[0].naturalHeight;
                $active.width(width)
                      .height(regionHeight)
                      .css('left', $(window).scrollLeft() + Math.round((innerWidth - width) / 2) + 'px')
                      .css('top', $(window).scrollTop() + 'px');
            }
        });
        if (direction > 0)
            $active.attr('src', work.urls[(i + 1) % work.urls.length]);
        else
            $active.attr('src', work.urls[(i - 1 + work.urls.length) % work.urls.length]);
        spin.spin(document.body);
    };
    
    $('#right-cursor').on('click', function (e) {cursor_handler(e, 1)});
    $('#left-cursor').on('click', function (e) {cursor_handler(e, -1)});
};
