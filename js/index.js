console.log("Your index.js file is working!")

$("#flip").on("click", function(){
  $(".panel").slideToggle()
});

$(document).ready(function(){
  $(".btn").hover(function(){
    $(this).css("padding", "15px");
    }, function(){
    $(this).css("padding", "12px");
  });
});

$(document).ready(function(){
  $("li").hover(function(){
    $(this).css("text-decoration", "underline");
    }, function(){
    $(this).css("text-decoration", "none");
  });
});

// $(document).ready(function(){
//   $("li", ".btn").hover(function(){
//     $(this).css("cursor", "pointer");
//     }, function(){
//     $(this).css("cursor", "default");
//   });
// });

// $(document).ready(function(){
//   $("li", ".btn").mouseover(function(){
//     $("li", ".btn").css("cursor", "pointer");
//   });
//   $("li", ".btn").mouseout(function(){
//     $("li", ".btn").css("cursor", "default");
//   });
// });
// $(".btn").hover(function(){
//   $(this).css("padding", "20px"), function(){
//     $(this).css("padding", "12px")
//   };

// $(".btn").hover(function() {
//   $( this )
//     .toggleClass( "hover" )
//     .next()
//       .stop( true, true )
//       .slideToggle();
// });

// $(".btn").on("hover", function (){
//   .css("background-color", "#000000");
// });

// $(".btn").hover(function(){
//   $(this).css("background-color", "#000000");
// });
  
//   $(document).ready(function(){
//     $("#flip").click(function(){
//       $(".panel").slideDown("slow");
//     });
//   });

//   $("#flip").on("click", function(){
//     $(this).append( $( ".panel") );
//   });