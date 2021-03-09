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

// Hazır Fonksiyonlara Giriş
    // encodeURI : bir url kodlamak için kullanılabilir // şifreler
    // decodeURI : şifreyi çözer

    var url = "my test.html?ad=gunseli&soyad=susi";

    document.write(url+"<br>");

    document.write(encodeURI(url)+"<br>");

    document.write(decodeURI(url)+"<br>");

    // eval : string değerlerden dinamik bir js kodu üretir, işlev katar

    var a = 10;
    var b = 20;

    var c = "a+b";
    var d = eval("a+b");

    document.write(c+"<br>");
    document.write(d+"<br>");

    /* 
    isFinite : Bir numaranın sonlu, yasal bir numara olup 
    olmaadığını kontrol edin: 
    Number.MAX_VALUE : Değişkenlerin maksimum alabileceği değer : 1.97E+308
    Number.MIN_VALUE : Değişkenlerin minimum alabileceği değer : 5e-324
    Number.POSITIVE_INFINITY : Değişken maksimum sınırı aştığı zaman döner.
    Number.NEGATIVE_INFINITY : Değişken minumum sınırı aştığı zaman döner.
    bir stringi sayıya dönüştürebilirse değiştirir.
    */

    var i = isFinite(-100000);
    var f = isFinite("gunseli");

    document.write(i+"<br>");
    document.write(f+"<br>");

    // isNAN : bir değerin geçersiz bir sayı olup olmadığını değerlendirir. olumsuz -> true

    var name = "sushi";
    var sayi = 9;

    var n = name + sayi;

    var n1 = isNaN(n);

    if(isNaN(n))
    {
        document.write(n1+" Bu bir sayı değildir"+"<br>");
    }
    else{
        document.write(n1+" Bu bir sayıdır."+"<br>");
    }

    // Number : farklı nesne değerlerini rakamlara çevirir

    var e = "123";
    document.write(typeof e+" "+e+"<br>");
    document.write(typeof Number(e)+e+"<br>");
    document.write(Number(e)+"<br>");

    // parseFloat : string parametresini floata dönüştürür

    var f = parseFloat("18.00");
    document.write(f+"<br>");

    // parseInt : string parametresini integera dönüştürür

    var i = parseInt("123 ee");
    document.write(i+"<br>");
    document.writeln(parseInt("11",16)+"<br>");
    document.writeln(parseInt("11",10)+"<br>");
    document.writeln(parseInt("11",8)+"<br>");
    document.writeln(parseInt("11",2)+"<br>");
    
    // String : 

    var s = new Date();

    document.write(typeof String(s)+"<br>");
    document.write(String(s));
