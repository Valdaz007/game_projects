
var x = 0;
function roll(){
    if (x >= 500) { x = 0; }
    else { x +=100; }
    document.querySelector('svg').viewBox.baseVal.x = x;
}