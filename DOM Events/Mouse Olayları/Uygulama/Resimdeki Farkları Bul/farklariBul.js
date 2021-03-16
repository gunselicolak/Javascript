function bul(event){

    var x= event.clientX;
    var y = event.clientY;

    document.getElementById("cikti").innerHTML="X KOordinatı : "+x+"Y Koordinatı : "+y;

    if((x> && x<) && (y> && y<)){
        document.getElementById("cikti").innerHTML="X KOordinatı : "+x+"Y Koordinatı : "+y;
    }
}