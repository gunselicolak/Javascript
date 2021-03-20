var yeniPencere;
function ac(){
    yeniPencere = window.open("", "yeniPencere", "width=250, height=200");
    yeniPencere.document.write("<h1>yeniPencere</h1>");

}
function islem(){
    var sayi1 = document.getElementById("sayi1").value;
    var sayi2 = document.getElementById("sayi2").value;

    var topla = parseInt(sayi1)+parseInt(sayi2);

    yeniPencere = window.open("", "yeniPencere", "width=250, height=200");
    yeniPencere.document.write("<h1>Toplam İşlemi Sonucu : " +topla +" </h1>");
}

function kapat(){
    if(yeniPencere){
        yeniPencere.close();
        document.getElementById("cikti").innerHTML="Pencere Kapatıldı";
    }
    else{
        document.getElementById("cikti").innerHTML="Açık Pencere Yok";
    }
    
}
