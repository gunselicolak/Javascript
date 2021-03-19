function kontrol(){
    console.log("Seçilme Bitti");
}
function sec(){
    var x =document.getElementById("progDil").value;
    document.getElementById("secim").innerHTML="Seçilen Programlama Dili : "+x;
}
function islem1(x){
    x.style.background="blue";
    x.style.color="yellow";
}
function islem2(x){
    x.style.background="blue";
    x.style.color="yellow";
}
function kaybet(y){
    y.style.background="red";
}
// oninput
function islem3(){
    var x = document.getElementById("girdi").value;
    document.getElementById("cikti").innerHTML="Yazdıklarınız  :"+x;
}
