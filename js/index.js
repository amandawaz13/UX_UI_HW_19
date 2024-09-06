
console.log("Your index.js file is loaded correctly!");

$(".flexContainer").scroll(function(){
  $(".flexContainer").fadeIn();
  $(".flexContainer").fadeIn(slow);
  $(".flexContainer").fadeIn(1500);
})

$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});

//$(".flexContainer").fadeIn(fast,callback);

//$(".flexContainer").fadeIn(function(){
  //  $(".gridItem1").fadeIn();
   // $(".gridItem2").fadeIn("slow");
   // $(".gridItem3").fadeIn(3000);
 // });
 
 /*! Fades in page on load */
//$('div').css('display', 'none');
//$('.flexContainer').fadeIn(500);

//$(window).scroll(function() {
  //if ($(this).scrollTop() > 500 && $(this).scrollTop() < 1250) {
   // $('#1').fadeIn();
 // } else {
 //   $('#1').fadeOut();
//  }
//}); 
