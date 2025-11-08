function roll(){
    x = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    x = x*100;
    document.querySelector('svg').viewBox.baseVal.x = x;
}

roll()