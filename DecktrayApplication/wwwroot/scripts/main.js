function hoi(myId) {
    console.log(`Hoi ${myId}`);
}

var clickBool = 0;

function clickDeckTray() {
    clickBool++;
    if (clickBool > 1) {
        clickBool = 0;
    }
    console.log(`Clickbool = ${clickBool}`);
}

document.addEventListener('mousemove', function (ev) {
    document.getElementById('followMe').style.transform = 'translateY(' + (ev.clientY - 770) + 'px)';
    document.getElementById('followMe').style.transform += 'translateX(' + (ev.clientX - 305) + 'px)';
}, false);