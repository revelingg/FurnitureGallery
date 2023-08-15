var opacity = 0
var time = 0

function fadein(){
    setInterval(show, 20);
}

function hide(){
    
}


var topImage = document.getElementById("topImage");
var images = new Array(

 "/images/timage1.jpeg",
 "/images/tImage3.jpg",
 "/images/tImage4.jpg",
 "/images/tImage2.jpg",

    

    
   
    


)

var len = images.length;
var i = 0;

function slider(){
    if(i > len -1){ 
        i = 0;
    }

    topImage.src = images[i];
  
    i++;
    
    setTimeout('slider()', 3000);
}