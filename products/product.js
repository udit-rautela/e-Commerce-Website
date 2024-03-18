var mainimage = document.getElementById("main-image");
var smallimage = document.getElementsByClassName("small-img");

smallimage[0].onclick = function(){
    mainimage.src = smallimage[0].src;
}
smallimage[1].onclick = function(){
    mainimage.src = smallimage[1].src;
}
smallimage[2].onclick = function(){
    mainimage.src = smallimage[2].src;
}
smallimage[3].onclick = function(){
    mainimage.src = smallimage[3].src;
}