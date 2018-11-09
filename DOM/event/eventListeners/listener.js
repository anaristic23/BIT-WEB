var $body = $("body");
var $image = $("img");
var $stopMovingButton = $("button");

function changePosition(event) {
    var positionTop = event.clientY;
    var positionLeft = event.clientX;

    $image.css('top', positionTop);
    $image.css('left', positionLeft);
}

$body.on("click", changePosition);


function stopMoving(event) {
    $body.off("click", changePosition);
}

$stopMovingButton.on("click", stopMoving);


