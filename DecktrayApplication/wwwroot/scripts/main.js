////function hoi(myId) {
////    console.log(`Hoi ${myId}`);
////}

var clickBool = 0;
var saveId = "";

function clickDeckTray(myId) {
    clickBool++;
    saveId = myId;
    if (clickBool > 1) {
        clickBool = 0;
    }
}

document.addEventListener('mousemove', function (ev) {
    //console.log(`${ev.clientX}:${ev.clientY}`);
    if (clickBool == 1) {
        document.getElementById(saveId).style.transform = 'translateY(' + (0) + 'px)'; //ev.clientY - 350
        document.getElementById(saveId).style.transform += 'translateX(' + (ev.clientX - 770) + 'px)';
        document.getElementById(saveId).style.position = "fixed";
    }
}, false);

//probleem: display flex locked de trays op hun plaats.