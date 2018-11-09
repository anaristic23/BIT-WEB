function prvaFunkcija() {
    var lista = document.querySelectorAll("ul");
    lista[1].className = "secondList";
    return lista;
}
prvaFunkcija();

function drugaFunkcija() {
    var li = document.querySelectorAll("li");

    for (var i = 0; i < li.length; i++) {
        li[i].className = "third";
    }
    return li;
}
drugaFunkcija();

function trecaFunkcija() {
    var list = document.querySelectorAll("ul:nth-child(3) li");

    for (var i = 0; i < list.length; i++) {
        list[i].className = "thirdList";
    }

    return list;
}
trecaFunkcija();