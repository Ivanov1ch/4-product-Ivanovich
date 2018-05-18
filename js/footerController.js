function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(()=>{
    let checkIfOnScreen = setInterval(()=>{
        if(isScrolledIntoView(document.getElementById('first-footer-img'))){
            console.log("In view");

            let imgs = document.getElementsByClassName("footer-img");

            Array.prototype.forEach.call(imgs, function(img) {
                // Do stuff here
                img.style.maxWidth = "100%";
            });




            clearInterval(checkIfOnScreen);
        }
    }, 50);
});