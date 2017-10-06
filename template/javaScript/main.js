alert("MALCOLM'S TOP TEN FAVORITE RAPPERS");

var images= ["images/biggie.jpg", "images/busta.jpg", "images/dmx.jpg", "images/jayz.jpg", "images/kanye.jpg", "images/maxB.jpg", "images/Nas.jpg", "images/LUDA.jpg", "images/snoop.jpg", "images/andre3000.jpg"]
var count=0;

$("#back").on("click", function(){
if(count==0){
  count=images.length-1;
} else{
  count=count-1;
}
$("img").attr("src", images[count]);
});
$("#skip").on("click", function(){
if(count==9){
  count=images.length-10;
} else{
  count=count+1;
}
$("img").attr("src", images[count]);
});
