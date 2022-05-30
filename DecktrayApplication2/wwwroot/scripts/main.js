////function hoi(myId) {
////    console.log(`Hoi ${myId}`);
////}

var clickBool = 0;
var saveId = "";
var clickedEdit = 0;

function clickDeckTray(myId) {
    saveId = myId;

    if (clickedEdit == 0) {
        clickBool++;
    }

    if (clickBool > 1) {
        clickBool = 0;
    }
}

function editTray() {
    clickedEdit++;
    if (clickedEdit > 1) {
        clickedEdit = 0;
    }
}


document.addEventListener('mousemove', function (ev) {
    //console.log(`${ev.clientX}:${ev.clientY}`);
    if (clickBool == 1) {
        document.getElementById(saveId).style.transform = 'translateY(' + (0) + 'px)'; //ev.clientY - 350
        document.getElementById(saveId).style.transform += 'translateX(' + (ev.clientX - 770) + 'px)';
        document.getElementById(saveId).style.position = "fixed";
    }
    else {
        document.getElementById(saveId).style.position = "absolute";
    }
}, false);

//probleem: display flex locked de trays op hun plaats.