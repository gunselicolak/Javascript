function kontrol(){
    console.log("Seçilme Bitti");
}
function sec(){
    var x =document.getElementById("progDil").value;
    document.getElementById("secim").innerHTML="Seçilen Programlama Dili : "+x;
}
function islem(x){
    x.style.background="blue";
    x.style.color="yellow";
}
