num = 1;
tips = new Array(num);
tips[0]="Event handlers for touch panel: onTouchStart/onTouchMove/onTouchEnd/onTouchCancel";
function showtips() {
    document.write("<blockquote>"+tips[Math.floor(Math.random()*num)]+"</blockquote><p></p>");
}
showtips();
