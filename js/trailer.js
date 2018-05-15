$('#trailer').one('loadstart', function (event) {
    console.log("Video started loading");
});
$('#trailer').one('canplay', function (event) {

    console.log("Video loaded");

    show();
});

let videoLoaded = setInterval(() =>{
    if(document.getElementById('trailer').readyState == 4){
        console.log("Video loaded");

        show();

        clearInterval(videoLoaded);
    }
}, 500);

let show = function() {

    document.getElementById('trailer-container').style.opacity = "1";

    document.getElementById('section-1').style.background = "none";
};