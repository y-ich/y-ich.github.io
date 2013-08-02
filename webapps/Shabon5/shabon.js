window.onload = function () {
    var screen = document.getElementById('screen');
    var ctx = screen.getContext('2d');

    ctx.globalAlpha = 0.7;

    ctx.strokeStyle = 'rgb(192, 80, 77)';
    ctx.beginPath();
    ctx.arc(70, 70, 60, 0, Math.PI*2, false);
    ctx.fill();
}
