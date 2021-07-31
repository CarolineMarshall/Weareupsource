



$(".team-member").click(function(){
     var target = $(this).attr("data-target");
    alert(target)
    $(".list").each(function(){
      if($(this).attr("data-list") == target){
        $(this).slideToggle();
      }});

 });
