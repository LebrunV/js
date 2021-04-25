
let initial = 100
function initialize(){
    document.body.style.fontSize= initial+"%"
}

function highter() {
    initial = initial + 10;
    document.body.style.fontSize= initial+"%"
}

function minder() {
    initial = initial - 10;
    document.body.style.fontSize= initial+"%"
}