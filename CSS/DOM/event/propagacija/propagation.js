var $images = document.querySelectorAll("img");


for (var i = 0; i < $images.length; i++) {
    $images[i].addEventListener('click', changeBorder);
}


function changeBorder(event) {
    console.log(event.target.width);

    if (event.target.width != 300) {
        event.currentTarget.classList.add("border");
        event.stopPropagation();

    }

}

document.addEventListener("click", drugaFunkcija);

function drugaFunkcija() {
    console.log("bla")

}

