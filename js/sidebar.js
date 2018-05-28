function openNav() {
    document.getElementById("sideNav").style.width = `${document.body.clientWidth}px`;
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

function sidebar(id){
    let element = document.getElementById(id);
    closeNav();
    window.scrollTo(element.offsetLeft,element.offsetTop + element.height);
}