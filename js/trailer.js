$( document ).ready(() => {
    disableScroll();
});

var videoLoaded = null;

let intervalManager = function (flag, time) {
    if(flag)
        videoLoaded =  setInterval(() =>{
            if(document.getElementById('trailer').readyState == 4){
                console.log("Video loaded");
                play();
                setTimeout(()=>{
                    if(videoLoaded) clearInterval(videoLoaded);
                }, 100);
            }
        }, time);
    else
        clearInterval(videoLoaded);
}


let play = function() {
    document.getElementById('home-screen').style.background = "none";
    document.getElementById('trailer').play();
    document.getElementById('music').play();
    setTimeout(()=>{
        document.getElementById('title-img').style.opacity = "1";
    }, 2000);
    enableScroll();
};

//Dealing with the required user interaction - On any interaction, attempt the reload
$(document).one('click', ()=>{
    console.log("Clicked");
    if(!isPlaying('trailer')){
        console.log("Video not playing");
        document.getElementById('trailer').pause();
        document.getElementById('music').pause();
        intervalManager(true, 500);
    }
});

let isPlaying = function(id){
    return document.getElementById(id).currentTime > 0 && !document.getElementById(id).paused && !document.getElementById(id).ended
}