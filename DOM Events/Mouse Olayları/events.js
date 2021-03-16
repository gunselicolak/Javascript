function ciftTikla()
{
    alert("Çift Tıklandı");
}
function sagTikla()
{
    alert("Sağ Tıklandı");
}
function kontrol()
{
    var k = confirm("Onaylıyor musunuz?");

    if(k==true){
        document.getElementById("cevap").innerHTML="Onay verildi.";
    }
    else{
        document.getElementById("cevap").innerHTML="Onay verilmedi.";
    }
}
function uzerineGeldi()
{
    alert("Üzerine Geldi");
}
function uzerindenGitti()
{
    console.log("Gitti..");
}
function yuklendi()
{
    console.log("Sayfa yüklendi...");
}
//window.onload=yuklendi;
function tiklaCtrl(event){
    if(event.ctrlKey){
        alert("CTRL tuşu basılıyken mouse ile tıkladınız");
    }
    else{
        alert("CTRL tuşuna basılmadı");
    }
}
function tiklaAlt(event){
    if(event.altKey){
        alert("ALT tuşu basılıyken mouse ile tıkladınız");
        }
    else{
        alert("ALT tuşuna basılmadı");
    }
}
function tiklaShift(event){
    if(event.shiftKey){
        alert("SHIFT tuşu basılıyken mouse ile tıkladınız");
        }
    else{
        alert("SHIFT tuşuna basılmadı");
    }
}
