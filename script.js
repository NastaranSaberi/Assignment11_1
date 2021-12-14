    var right_hand = document.getElementById("right-hand"); 
    var left_hand = document.getElementById("left-hand");
    var Head= document.getElementById("head");
    var Eyes_1 = document.getElementById("eyes1"); 
    var Eyes_2 = document.getElementById("eyes2"); 
    var Body = document.getElementById("body")
        
 
    Head.onclick = function () {
        Eyes_1.style.width = "10px"
        Eyes_1.style.height = "10px"
        Eyes_2.style.width = "10px"
        Eyes_2.style.height = "10px"        
    }
    Body.onclick = function (){
        Eyes_1.style.width = "18px"
        Eyes_1.style.height = "5px"
        Eyes_2.style.width = "18px"
        Eyes_2.style.height = "5px"
        
    }
    left_hand.onclick = function() {
        left_hand.style.transform = "rotate(-150deg)";
        left_hand.style.transition = "2s"
        setTimeout(function() {
            left_hand.style.transform = "rotate(0deg)";
        }, 2000);
    }
    right_hand.onclick = function() {
        right_hand.style.transform = "rotate(150deg)";
        right_hand.style.transition = "2s"
        setTimeout(function() {
            right_hand.style.transform = "rotate(0deg)";
        }, 2000);
    }
    
    
    
   
   