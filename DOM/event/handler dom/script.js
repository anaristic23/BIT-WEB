var $button = document.querySelector('button');


$button.onclick = function () {
    var $inputText = document.querySelector('input');

    var $p = document.createElement('p');
    $p.textContent = $inputText.value;
    var $sentMessages = document.querySelector('div');

    $sentMessages.appendChild($p);
    $inputText.value = "";
}

