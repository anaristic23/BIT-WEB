var $body = $("body");
var $image = $("img");

var offset = 0;
var intervalId;
function moveBackground() {
    intervalId = setInterval(singleBgMove, 50);
}
function singleBgMove() {
    offset -= 20;
    $body.css("background-position", offset + "px 100%");
};

function showMarioRunningImage() {
    $image.attr('src', './mario_running.gif');
}

function isMarioStanding() {
    var currentImage = $image.attr('src');
    return currentImage === "./mario.png";
}

function startRunning(event) {
    if (isMarioStanding() && event.which === 39) {
        showMarioRunningImage();
        moveBackground();
    }
};

function stopRunning(event) {
    if (event.which === 39) {
        $image.attr("src", "./mario.png");
        clearInterval(intervalId);
    }
}

$body.on("keydown", startRunning);
$body.on("keyup", stopRunning);
