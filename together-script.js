boundaryleft = 1;
boundaryright = 1;
boundaryup = 1;
boundarydown = 1;

var pressed = false;

$(document).keydown(function(e) {
    if(!pressed){ //only start animation once
        width = $(this).width();
        height = $(this).height();
        switch (e.key) {
            case 'ArrowLeft':
                $('#couple').stop().animate({
                    left: '-=' + ($("#couple").position().left - boundaryleft)
                }, 1500); //left arrow key
                break;
            case 'ArrowUp':
                $('#couple').stop().animate({
                    top: '-=' + ($("#couple").position().top - boundaryup) 
                }, 1500); //up arrow key
                break;
            case 'ArrowRight':
                $('#couple').stop().animate({
                    left: '+=' + (width - $("#couple").position().left - 300 - boundaryright)  
                }, 1500); //right arrow key
                break;
            case 'ArrowDown':
                $('#couple').stop().animate({
                    top: '+=' + (height - $("#couple").position().top - 150 - boundarydown) 
                }, 1500); // down arrow key
                break;
       }
    }
    pressed = true;
}).keyup(function(e){
        $("#couple").stop();
    pressed = false;
});