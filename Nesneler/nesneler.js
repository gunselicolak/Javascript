/*
    Nesne nedir ?
    nesnelerin özellileriyle oluşan değerlere method denir.
    js nesneye dayalı programlama dilidir.

*/

    var araba = {
        marka ="range rover";
        renk="siyah";
        yil ="2018";
        km="45000";
    }

    console.log(araba);

    document.write(araba.marka+"<br>");
    document.write(araba.renk+"<br>");
    document.write(araba.yil+"<br>");
    document.write(araba.km+"<br>");

    // functionla nesnee tanımlama 

    function araba(marka,renk,yil,km)
    {
        this.markasi = marka;
        this.rengi = renk;
        this.yili = yil;
        this.kmsi = km;
    }

    var araba1 = new araba("Kia","Beyaz","2017",0);
    var araba1 = new araba("Toyota","Gri","2019",2000);

    console.log(araba1);
    console.log(araba2);

    document.write(araba1.markasi+"<br>");
    document.write(araba1.rengi+"<br>");
    document.write(araba1.yili+"<br>");
    document.write(araba1.kmsi+"<br>");

    document.write("<br>");
    
    document.write(araba2.markasi+"<br>");
    document.write(araba2.rengi+"<br>");
    document.write(araba2.yili+"<br>");
    document.write(araba2.kmsi+"<br>");

//
    var insan = new Object();

    insan.isim = "bilge";
    insan.soyad = "seli";
    insan.yas = 19;
    
    console.log(insan);

    document.write(insan.isim);
    document.write(insan.soyad);
    document.write(insan.yas);

    var human = [
    
        {
            isim :"özcan",
            soyIsim  :"mutlu",
            yas : "30",
            dogumTarihi: "1990"
        },
        
        {
            isim :"semih",
            soyIsim  :"pak",
            yas : "23",
            dogumTarihi: "1997"       
        },
        
        {
            isim :"leyla",
            soyIsim  :"lale",
            yas : "15",
            dogumTarihi: "2005"       
        }
    ];

// Nesnelere Metod Ekleme : Nesne özelliğine fonksiyon tanımlamak

    var Insan = {
        isim: "bilge",
        soyad: "ışık",
        yas: 19,
        adSoyad:function(){
            return this.ad+" "+this.soyad;
        },
        dogumTarihiHesap:function(){
            return(2020-this.yas);
        }
    }
    
    document.write(Insan.adSoyad()+"<br>");
    document.write(Insan.dogumTarihiHesap()+"<br>");

// Prototype Nesneler Özellik Ekleme
    
function araba(marka,renk,model)
{
    this.marka = marka;
    this.renk = renk;
    this.model = model;
}

araba.prototype.fiyat = 200000;

var araba1 = new araba ("Kartal","Beyaz", "1993");

console.log(araba1);


// String Nesnesi

// length : Dizinin uzunluğunu döndürür.
// indexOf() : Belirlenen bir dizedeki belirtilen bir metnin ilk bulunduğu yerin komutunu döndürür.
// lastindexOf() : Birden fazla aynı kelime varsa sondaki dizenin konumunu verir.
// search() : indexOf'tan farkı ikinci bir başlangıç konumu alamaz.
// substr() : Belirlediğimiz karakterden sonrasını(belli bir bölüm de olabilir) almamızı sağlar. 
// replace() : Herhangi bir ifadeyi değiştirmemizi sağlar.

var r = "Ben bir Biligsayar Mühendisiyim";

document.write(r.replace());

// toLowerCase() : Büyük text karakterlerini küçük karakterlere çevirir.
// toUpperCase() : 
// concat() : 
// split() : Bir stringi diziye çevirir.


// Math Nesnesi
/*
    E -> 2.718 olan e değerini döndürür.
    LN10 -> 10'un algoritmasını döndürür.
    LN2 -> 2' nin algoritmasını dödürür.
    SQRT2 -> 2'nin karekökünü döndürür
    PI -> pi sayısını döndürür.
    LOG2E -> e'nin logaritmasını verir
*/
/*
ceil : ondalıklı sayısı en yakın tam sayıya yuvarlar. (yukarı yuvarlar)
floor : kendisine en yakın bir alt tam sayıya yuvarlar.
min/max :
round : kendisine en yakın tam sayıya yuvarlar.
sqrt : girilen sayının karekökünü verir.
random : 0 ile 1 arasında sayı üretir.
*/

// Date Nesnesi 

/*
getDate :
getDay:
getMonth: ayı döndürür. (0-11)
getFullYear: yılı döndürür
setDate: 
setFullYear: 
setMonth: 
getHours: saati döndürür.
setHours: saati ayarlar.
getMinutes: dakikayı döndürür.
setMinutes: 


*/
