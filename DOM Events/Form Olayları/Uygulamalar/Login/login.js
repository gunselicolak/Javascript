/* Girdiğim karakter sayısı 6'dan ufaksa
   alt tarafa adınız altı karakterden az olamaz
   uyarısı gelsin
*/

function adKontrol(){
    
    var e = document.getElementById("ad").value;
    var say = e.length;

    if(say<6)
    {
        document.getElementById("uyari1").innerHTML="Adınız en az 6 karakterden oluşmalı şimdi "+say+" karakter";
    }
}
