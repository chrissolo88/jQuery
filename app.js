$(function(){console.log('LETS GET READY TO PARTY WITH JQUERY!!!')});
$('article img').attr('class', 'image-center');
$("article p:last-child").remove();
$("#title").css("font-size", Math.random() * 100);
$("ol").append($("<li>", {text: "My Lucky Number"}));
$("aside").empty().append($("<p>", {text: "Sorry about that list :("}));
$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color","rgb(" + red + "," + green + "," + blue + ")");
});
$("img").on('click', function (e) {
    $(e.target).remove();
  });