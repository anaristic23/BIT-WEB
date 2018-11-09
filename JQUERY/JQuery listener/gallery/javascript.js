var $body = $("body");

$(".selected")
    .removeClass()
    .parent()
    .next()
    .children()
    .eq(1)
    .addClass("selected");



var $title = $("<h1>");
$title.text("Amazing Gallery");
$title.css({
    "color": "red",
    "text-align": "center"

});

$("img:first").before($title);

