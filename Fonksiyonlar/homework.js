/*
    Homework 1
    Doğum yılınızı girdiğinizde size yaşınızı söyleyen 
    fonsiyonu yazın..
*/

    function yasHesap(dyil)
    {
    var yas =(2020-dyil);
    return yas;
    }

    document.write(yasHesap(1999)+"<br>");
    document.write(yasHesap(1958)+"<br>"+"<br>");


/*
    Homework 2
    Fonksiyona ad ,yil size şöyle karşılama

    ad yaşı yaş
*/








/*
    Homework 3
    Girilen parametre değerine kadar olan 
    sayıları toplayan function yazın.
 */

var i = 0;
var sonuc = 0;

function toplayan(sayi){
    if(i<sayi){
        sonuc += i;
        i++;
        document.write((sonuc+i)+"<br>");
        toplayan(sayi);
    }
}

toplayan(3);
