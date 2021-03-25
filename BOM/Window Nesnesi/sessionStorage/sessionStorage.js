function olustur(){
    sessionStorage.setItem("name","gunseli");
    sessionStorage.setItem("surname","colak");
}
function yaz(){
    document.getElementById("cikti").innerHTML=sessionStorage.getItem("name")+" "+sessionStorage.getItem("surname");
}
function sil(){
    sessionStorage.removeItem("name");
    document.getElementById("cikti").innerHTML="";
}
function hepsiniSil(){
    sessionStorage.clear();
}