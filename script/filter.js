$(document).ready(function(){
  $(".search-wrap #search-box").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#product-list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});