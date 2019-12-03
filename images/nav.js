
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("hamburger").setAttribute("onclick", "javascript: closeNav();");
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("hamburger").setAttribute("onclick", "javascript: openNav();");
    document.getElementById("main").style.marginLeft = "0";
}