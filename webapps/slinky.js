function redraw() {
    var canvas = document.getElementById('graph');
    var width = canvas.width;
    var height = canvas.height;
    var ctx = canvas.getContext('2d');
    var e = parseInt(document.getElementById('e').value);
    var f = parseInt(document.getElementById('f').value);
    var g = parseInt(document.getElementById('g').value);
    var h = parseInt(document.getElementById('h').value);
    var i = parseInt(document.getElementById('i').value);
    var t, dt;

    function slinky_x(t) {
	return Math.floor((Math.cos(e*t)-Math.cos(f*t)*Math.sin(g*t))*height/6+width/2);
    }
    function slinky_y(t) {
	return Math.floor(-(2*Math.sin(h*t)-Math.sin(i*t))*height/6+height/2);
    }


    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgb(192, 80, 77)';
    ctx.beginPath();
    ctx.moveTo(slinky_x(0), slinky_y(0));
    dt = 8.0/3000;
    for (t = 0.0; t < 8.0; t += dt) {
	ctx.lineTo(slinky_x(t), slinky_y(t));
    }
    ctx.stroke();
}

function onchange(event) {
    var e = event.currentTarget;

    document.getElementById(e.id + '_value').innerText = e.value;
    redraw();
}

window.onload = function () {
    var inputs = document.getElementsByTagName('input');

    for (i = 0; i < inputs.length; i++)
	inputs[i].addEventListener('change', onchange, false);

    redraw();
}
