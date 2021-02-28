// Fonksiyonlar
/* Fonksiyon nedir? 
    Bir işlevi yerine getiren kod bloklarıdır. 
    Hazır ve kullanıcı tanımlı olarak 2 temel sınıftan oluşur.
    (Parametresiz/Parametreli) 
*/
// Parametresiz Fonksiyon
/*
function topla(){
    var a = 10, b = 20;
    
    return sonuc = a + b;
}

document.write(topla());
*/

// Parametreli Fonksiyon
/*
function topla(sayi1,sayi2){
    document.write(sayi1+sayi2);
}

topla(5,5);
*/

/*
function carp(a,b){
    return sonuc = a*b;

    // return sonuc; => bir işlemin yürütülmesini durur ama 
                        // bu işlemden dönen değeri döndürür. 
}

document.write(carp(5,5));
*/

// Fonksiyon Geçişleri
/*
var islem1 = function(yap1){
    yap1(20+10);
}

var islem2 = function(yap2){
    document.write(10+yap2);
}

islem1(islem2);
*/

// Recursive(Tekrarlamalı) Fonkiyonlar
/*
var i = 0;

function tekrarla(param){
    if(i<param){
        i++;
        document.write(i+"<br>");
        tekrarla(param);
    }
}

tekrarla(5);
*/
