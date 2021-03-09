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

    // functionla nesnee tanımlama 

    function araba(marka,renk,yil,km)
    {
        this.markasi = marka;
        this.rengi = renk;
        this.yili = yil;
        this.kmsi = km;
    }

    var araba1 = new araba(" ")
