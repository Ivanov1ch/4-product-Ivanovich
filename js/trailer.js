$('#trailer').one('loadstart', function (event) {
    console.log("Video started loading");
});
$('#trailer').one('canplay', function (event) {

    console.log("Video loaded");

    play();
});

let videoLoaded = setInterval(() =>{
    if(document.getElementById('trailer').readyState == 4){
        console.log("Video loaded");

        play();

        clearInterval(videoLoaded);
    }
}, 500);

let play = function() {
    document.getElementById('section-1').style.background = "none";
    document.getElementById('trailer').play();
    document.getElementById('music').play();
};