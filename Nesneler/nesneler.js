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

