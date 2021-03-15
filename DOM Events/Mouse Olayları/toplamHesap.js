/* 2 input oluşturun bu iki inputa  girilen 
    sayıların toplamını veren  projeyi yapın
*/

function hesapla()
{
    var sayi1 =  parseInt(document.getElementById("sayi1").value);
    var sayi2 =  parseInt(document.getElementById("sayi2").value);

    document.getElementById("sonuc").innerHTML=sayi1+sayi2;    
}
