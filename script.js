boundaryleft = 1;
boundaryright = 1;
boundaryup = 1;
boundarydown = 1;

var pressed = false;

$(document).keydown(function(e) {
    if(!pressed){ //only start animation once
        width = $(this).width();
        height = $(this).height();
       console.log(e.key)
        switch (e.key) {
            case 'ArrowLeft':
                $('#pollo').stop().animate({
                    left: '-=' + ($("#pollo").position().left - boundaryleft)
                }, 1500); //left arrow key
                break;
            case 'ArrowUp':
                $('#pollo').stop().animate({
                    top: '-=' + ($("#pollo").position().top - boundaryup) 
                }, 1500); //up arrow key
                break;
            case 'ArrowRight':
                console.log(width)
                console.log($("#pollo").position().left)
                $('#pollo').stop().animate({
                    left: '+=' + (width - $("#pollo").position().left - 150 - boundaryright)  
                }, 1500); //right arrow key
                break;
            case 'ArrowDown':
                $('#pollo').stop().animate({
                    top: '+=' + (height - $("#pollo").position().top - 150 - boundarydown) 
                }, 1500); // down arrow key
                break;
            case 'a': // a
                $('#huevo').stop().animate({
                    left: '-=' + ($("#huevo").position().left - boundaryleft) 
                }, 2000);
                break;
            case 'w': // w
                $('#huevo').stop().animate({
                    top: '-=' + ($("#huevo").position().top - boundaryup)  
                }, 2000); 
                break;
            case 'd': // d
                $('#huevo').stop().animate({
                    left: '+=' + (width - $("#huevo").position().left - 150 - boundaryright)  
                }, 2000); 
                break;
            case 's':
                $('#huevo').stop().animate({
                    top: '+=' + (height - $("#huevo").position().top - 150 - boundarydown) 
                }, 2000); // down arrow key
                break;
       }
    }
    pressed = true;
}).keyup(function(e){
    if (['w', 'a', 's', 'd'].includes(e.key)) {
        $("#huevo").stop();
    }
    else {
        $('#pollo').stop();
    } // stop the current animation
    pressed = false;
});