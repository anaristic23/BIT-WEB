function selectLi() {
  var li = document.querySelector(".active");
  li.className = "";

  li.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className =
    "active";
}
selectLi();

function alertText() {
  var listItem = document.querySelector("nav ul li:nth-child(2)");
  alert(listItem.textContent);
}

function argumentsText(text) {
  var lastItem = document.querySelectorAll("li");
  lastItem[lastItem.length - 1].textContent = text;
}

argumentsText("blabla");

function addSelect(options, parentElement) {
  var selectAsHtml = "<select>";
  for (var i = 0; i < options.length; i++) {
    selectAsHtml += "<option>" + options[i] + "</option>";
  }
  selectAsHtml += "</select>";

  parentElement.innerHTML += selectAsHtml;
}


function addSelectUsingDomMethods(options, parentElement) {
    var select = document.createElement("select");

    for (var i = 0; i < options.length; i++){
        var singleOption = document.createElement('option');
        singleOption.textContent = options[i];

        select.appendChild(singleOption);
    }

    parentElement.appendChild(select);
}

var firstDiv = document.querySelector(".first");
addSelectUsingDomMethods([1,2,"ana"], firstDiv);
var secondDiv = document.querySelector(".second");
addSelectUsingDomMethods(["jana", "dva"], secondDiv);