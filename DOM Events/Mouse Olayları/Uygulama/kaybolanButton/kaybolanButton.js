// Bir kez tıklayınca kaybolan button

function kislem(event){
    
    x = event.detail;

    if(x == 1){
        document.getElementById("kaybol").style.display="none";
        document.getElementById("kcikti").innerHTML="Buton Yok Oldu..";
    }
}