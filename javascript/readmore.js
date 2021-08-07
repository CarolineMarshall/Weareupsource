

// alert(target)

$(".team-member").click(function(){
     var target = $(this).attr("data-target");
    $(".list").each(function(){
      if($(this).attr("data-list") == target){
        $(this).slideToggle();
}});
        if ($(this).text() == "Read More") {
    $(this).text("Read less")
  } else {
    $(this).text("Read More") }


 });
