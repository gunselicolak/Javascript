function goruntule1(){
    var w = window.innerHeight;
    var h = window.innerHeight;

    document.getElementById("cikti1").innerHTML="Width :" +w+" - "+"Height :"+h;
}
function goruntule2(){
    var w = window.outerWidth;
    var h = window.outerHeight;

    document.getElementById("cikti2").innerHTML="Width :" +w+" - "+"Height :"+h;
}
function ilerle(){
    window.scrollBy(100,100);
    //window.scrollBy(100,""); // sadece sağa gider
}