((func) ->
    scr = document.createElement 'script'
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js";
    scr.onload = ->
        func jQuery.noConflict true
    document.body.appendChild scr
) ($) ->
    $('#search img').each (num) ->
        if num < 100
            a = document.createElement 'a'
            a.download = num + '.jpg'
            a.href = $(this).attr 'src'
            evt = document.createEvent 'MouseEvent'
            evt.initEvent 'click', true, false
            a.dispatchEvent evt
        return
    return
