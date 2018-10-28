window.onload = function() {
    var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

    var layerElement = 0;
    var layerMove = 0;
    document.querySelector(".win").onmousewheel = function() {
        var myLayers = document.getElementsByClassName("layer");
        var mouseMove = Math.floor(event.deltaY);
    console.log(mouseMove);
    
        if(mouseMove > 0) {
         
        if(layerMove > height){
            layerElement++;
            layerMove = 0;
        }
        if(layerElement == myLayers.length-1){
            return false;
        }
        
        layerMove += 0.3 * mouseMove;
        myLayers[layerElement].style.top = -layerMove + "px";
        // console.log(layerElement);
    }
    else {
              
        if(layerMove < 0) {
            layerMove = 0;
            myLayers[layerElement].style.top = -layerMove + "px";    
            console.log(layerMove);
            
            if(layerElement == 0){
               return false;
            }
        }
        
        if(layerMove == 0) {
            layerElement--;
//            console.log(layerElement);
            layerMove = height; 
        }
        
        layerMove += 0.3 * mouseMove;
        myLayers[layerElement].style.top = -layerMove + "px";
        //   console.log(layerElement);
    }
}

}   
var on = document.getElementById('block-one_on')
on.onclick = function(){
    var imgLed = document.getElementById('led');
    var imgOn = document.getElementById('block-one_on')
    if (imgLed.src.indexOf('img/led_off.png')>0){
        imgLed.src='img/led_on.png';
        imgOn.src='img/on.png'
    }
    else{
        imgLed.src='img/led_off.png';
        imgOn.src='img/off.png'
    }
} 



