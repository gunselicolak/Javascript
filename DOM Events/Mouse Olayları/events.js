function ciftTikla(){
    alert("Çift Tıklandı");
}
function sagTikla(){
    alert("Sağ Tıklandı");
}
function kontrol(){
    var k = confirm("Onaylıyor musunuz?");

    if(k==true){
        document.getElementById("cevap").innerHTML="Onay verildi.";
    }
    else{
        document.getElementById("cevap").innerHTML="Onay verilmedi.";
    }
}