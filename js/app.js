/*--- Hide information modal box ---*/
$("a.close").click(function () {
    $(".overlay").fadeOut(1000);
});
/*--- Display information modal box ---*/
$(".what").click(function () {
    $(".overlay").fadeIn(1000);
});
