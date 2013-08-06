# (C) 2012 ICHIKAWA, Yuji (New 3 Rs)

# variable initialization

LANG = (navigator.userLanguage ? navigator.language).slice 0, 2
author =
    default: 'Vermeer'
    ja: 'フェルメール'
$body = $(document.body)
$info = $('#info')
$container = $('#container')
$caption = $('#caption')
$highres = null
focus = null # picture info if focusing some work.

# function definitions

spinner = 
    spinner: new Spinner
        lines: 13
        length: 3
        width: 2
        radius: 5
        corners: 1
        rotate: 0
        color: '#fff'
        speed: 1
        trail: 60
        shadow: false
        hwaccel: false
        className: 'spinner'
        zIndex: 2e9
        top: 'auto'
        left: 'auto'
    $spinner: $('#spinner')
    start: ->
        spinner.$spinner.css 'display', 'block'
        spinner.spinner.spin spinner.$spinner[0]
    stop: ->
        spinner.spinner.stop()
        spinner.$spinner.css 'display', ''        
        
#        
# DOM initialization
#

# title
$('title').text author[LANG] ? author['default']

# thumbnails
imgs = for p in pictures
    $("<img class=\"my-thumbnail\" src=\"#{p.small}\" />").data 'info', p
$container.append imgs

# fast click for iOS and Android
# new NoClickDelay $container[0]

#
# events
#

$('.my-thumbnail').click ->
    return if focus?

    $this = $(this)
    focus = $this.data('info')
    
    # start to load high resolution image
    $image = $("<img class=\"horizontal-center\" src=\"#{focus.large ? focus.normal}\">")
    $image.data 'deferred', $.Deferred -> @then spinner.stop
    $image.on 'load', -> $(this).data('deferred').resolve()
    spinner.start()

    # start to zoom in the work to 'contain' size 
    $container.data 'deferred', $.Deferred()
    $container.one $s.vendor.transitionend, ->
        $(this).data('deferred').resolve()
    offset = $this.offset()
    if $this.width() / $this.height() < innerWidth / innerHeight # if vertically long ratio
        scale = innerHeight / $this.height()
        translateX = (innerWidth - $this.width() * scale) / 2 - offset.left * scale + document.body.scrollLeft
        translateY = - offset.top * scale + document.body.scrollTop
    else
        scale = innerWidth / $this.width()
        translateX = - offset.left * scale + document.body.scrollLeft
        translateY = (innerHeight - $this.height() * scale) / 2 - offset.top * scale + document.body.scrollTop
    $container.css 'transform', "translate(#{translateX}px, #{translateY}px) scale(#{scale})"

    # fade in the image after both loading it and transition
    $.when($image.data('deferred'), $container.data('deferred')).then ->
        frame = 50 # px
        $highres = $("<div id=\"highres-frame\" class=\"vertical-center\" style=\"width: #{innerWidth + frame * 2}px; height: #{innerHeight + frame * 2}px; left: #{document.body.scrollLeft - frame}px; top: #{document.body.scrollTop - frame}px; opacity: 0\"></div>")
        if $image[0].naturalWidth / $image[0].naturalHeight < innerWidth / innerHeight
            $image.attr 'height', innerHeight.toString()
        else
            $image.attr 'width', innerWidth.toString()
        $highres.append $('<div>').append $image
        $highres.on 'click', ->
            return if $caption.is ':visible'
            $(this).one($s.vendor.transitionend, ->
                $(this).remove()
                $highres = null
                $container.css 'transform', ''
                focus = null
                $info.css 'opacity', ''
            ).css 'opacity', '0'
        
        $body.append $highres
        setTimeout (->
            $highres.css 'opacity', '1'
            $highres.one $s.vendor.transitionend, ->
                $info.css 'opacity', '0.5'
        ), 0
        $image = null

captionTimer = null
effectTimer = null
$info.click ->
    return unless focus?
    captionTime = 20 # sec.
    effectTime = 15 # sec.
    if captionTimer? # cancel
        clearTimeout captionTimer
        captionTimer = null
        clearTimeout effectTimer if effectTimer?
        effectTimer = null
        $caption.one $s.vendor.transitionend, -> $(this).css 'display', 'none'
        $caption.css 'opacity', ''
        $highres.css
            'transform': ''
            'transform-origin':''
            'transition': ''                        
    else
        if 'focus' of focus
            $image = $highres.find('img')
            origin =
                left: $image.position().left + parseInt($image.css('margin-left')) + $image.width() * focus.focus[0]
                top: $image.position().top + parseInt($image.css('margin-top')) + $image.height() * focus.focus[1]
            $highres.css
                'transform': ''
                'transform-origin': "#{origin.left}px #{origin.top}px"
                'transition': $s.vendor.prefix + "transform #{effectTime}s"
            effectTimer = setTimeout (->
                $highres.css 'transform', "translate(#{innerWidth / 2 - origin.left}px, #{innerHeight / 2 - origin.top}px) scale(2)"
                $highres.one $s.vendor.transitionend, ->
                    $highres.css
                        'transform': ''
                        'transform-origin':''
                        'transition': ''                        
                effectTimer = null
            ), (captionTime - effectTime) * 1000
        $caption.children().html "\"#{focus.title[if LANG of focus.title then LANG else 'en']}\"<br>" + if ('comment' of focus) and (LANG of focus.comment) then focus.comment[LANG] else ''
        $caption.css('display', 'block')
        setTimeout (-> $caption.css('opacity', '0.8')), 0
        captionTimer = setTimeout (->
            captionTimer = null
            $caption.one $s.vendor.transitionend, -> $(this).css 'display', 'none'
            $caption.css('opacity', '')
        ), captionTime * 1000
