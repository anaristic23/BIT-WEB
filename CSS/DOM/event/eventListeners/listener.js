var $body = document.querySelector("body");
var $image = document.querySelector("img");
var $stopMovingButton = document.querySelector("#stop-moving");


$body.addEventListener("click", changePosition);
$stopMovingButton.addEventListener("click", stopMoving);


function changePosition(event) {
    var positionTop = event.clientY;
    var positionLeft = event.clientX;

    $image.style.top = positionTop + "px";
    $image.style.left = positionLeft + "px";
}


function stopMoving() {
    $body.removeEventListener("click", changePosition);
}


