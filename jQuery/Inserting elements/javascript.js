var $body = $("body");
var $div = $("<div>");
$body.append($div);

$div.css({
    "border": "1px solid black"
});

var niz = ["https://via.placeholder.com/300x200/FF00F0", "https://via.placeholder.com/300x200/FF0022", "https://via.placeholder.com/300x200/BBEEE", "https://via.placeholder.com/300x200/11EE22", "https://via.placeholder.com/300x200/22DDEE", "https://via.placeholder.com/300x200/FFFFFF"];



function createGallery(niz) {
    for (var i = 0; i < niz.length; i++) {
        var src = niz[i];
        var $img = $("<img>")
        $img.attr("src", src);
        $img.width(Math.random() * 500);
        $div.append($img);
    }
}
createGallery(niz);

var $title = $("<h1>");
$title.text("Amazing Gallery");
$title.css({
    "color": "red",
    "text-align": "center"

});
$("img:first").before($title);

function setColor() {
    var $imgs = $('img');

    for (var i = 0; i < $imgs.length; i++) {
        if ($imgs.eq(i).width() < 300) {
            $imgs.eq(i).css("border", "1px solid green");
        } else {
            break;
        }
    }
}

setColor();