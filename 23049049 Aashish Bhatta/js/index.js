let cartCount = 0;
const buttons = document.querySelectorAll(".product button");
function handleClick(event) {
    
    const button = event.target;
    
    button.textContent = "✔";
    cartCount++;
    const carttag = document.getElementById("cartcounter");
    if(cartCount == 1){
      carttag.textContent = cartCount + " Item Added";
    }
     else
    {
      carttag.textContent = cartCount + " Items Added";
    }
  } 
buttons.forEach(button => button.addEventListener("click", handleClick));

var images = ["../img/mostsale.png", "../img/mostsale 2.png", "../img/mostsale 3.png"];
setInterval(slider, 2000);
var i = 0;
function slider() {
    if (i < images.length) {
        i++;
    }
    else {
        i = 1;
    }
    document.getElementById("img").src = images[i - 1];
}
