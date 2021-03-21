function olustur(){
    sessionStorage.setItem("name","gunseli");
}
function yaz(){
    document.getElementById("cikti").innerHTML=sessionStorage.getItem("name");
}
