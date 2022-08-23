$(document).ready(function(){
    $(".circle").mouseenter(function() {
        var audio = $("#mySoundClip")[0];
        audio.play();
    });
    
    $(".circle").mouseleave(function() {
        var audio = $("#mySoundClip")[0];
        audio.pause();
      });
    
    $(".circle-2").mouseenter(function() {
        var new_audio = $("#Sound") [0];
        new_audio.play();
    });
    
    
    $(".circle-2").mouseleave(function(){
        var new_audio = $("#Sound") [0];
        new_audio.pause();
    });
    
    $(".overlay").click(function() {
        var firstElementChild = this.firstElementChild
        var lastElementChild = this.lastElementChild
        firstElementChild.style.display = 'none'
        lastElementChild.style.display = 'flex'
    });

    $(".overlay").mouseleave(function(){
        $(".text-2").hide();
        $(".text").show();
    });

    $(".container-2").hide("fast",function(){
        $(".container-2").show(1500);
        });

    $(".container-3").hide("fast",function(){
    $(".container-3").show(2000);
        });

    $(".container").hide("fast",function(){
        $(".container").show(5000);
        });

    $(".circle-2").hide("fast",function(){
        $(".circle-2").show(7000);
    });
    
    
  }); 







