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
    var x = document.getElementById("girdi1").value;
    document.getElementById("cikti1").innerHTML="Yazdıklarınız  :"+x;
}
function islem4(){
    document.getElementById("cikti2").innerHTML="Form Temizlendi..";
}
function islem5(){
    var x = document.getElementById("girdi3");
    document.getElementById("cikti3").innerHTML="Aranan Kelime :"+x.value;
}
function islem6(){
    var x = document.getElementById("girdi4");
    document.getElementById("cikti4").innerHTML="Seçim Yaptınız :"+x.value;
}
