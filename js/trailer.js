$( document ).ready(() => {
    intervalManager(true, 500);
});

$('#trailer').one('loadstart', function (event) {
    console.log("Video started loading");
});
$('#trailer').one('canplay', function (event) {

    console.log("Video loaded");

    play();
});

var videoLoaded = null;

let intervalManager = function (flag, time) {
    if(flag)
        videoLoaded =  setInterval(() =>{
            if(document.getElementById('trailer').readyState == 4){
                console.log("Video loaded");

                play();

                clearInterval(videoLoaded);
            }
        }, time);
    else
        clearInterval(videoLoaded);
}


let play = function() {
    document.getElementById('section-1').style.background = "none";
    document.getElementById('trailer').play();
    document.getElementById('music').play();
};

//Dealing with the required user interaction - On any interaction, attempt the reload
$('#body').one('scroll', () => {
    if(!isPlaying('video')){
        document.getElementById('trailer').pause();
        document.getElementById('music').pause();
        intervalManager(true, 500);
    }
});
$('#body').one('click', ()=>{
    if(!isPlaying('video')){
        document.getElementById('trailer').pause();
        document.getElementById('music').pause();
        intervalManager(true, 500);
    }
});

let isPlaying = function(id){
    return document.getElementById(id).currentTime > 0 && !document.getElementById(id).paused && !document.getElementById(id).ended
}