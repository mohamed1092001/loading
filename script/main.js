let loading = 0;
let moving = -100;
$("button").click(function () {
  let load = setInterval(function () {
    loading++;
    moving++;
    console.log(loading)
    if (loading <= 100) {
      $(".bar").css('width', loading + '%');
      $("img").css('left', loading + '%');
      $("img").css('transform', 'translate(' + moving + '%)');
      $("button").html("downloading");
    } else {
      clearInterval(load);
      $("button").html("downloading");
    }
  }, 100)
})