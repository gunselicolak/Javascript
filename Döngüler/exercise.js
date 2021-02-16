/*
1.Ödev
    for dönügüsünü kullanarak belirlenen bir yazıyı 
    aaşlık etiketleriyle otomatik yazdırın.
 */

 for(i = 1; i<=6; i++ )
 {
     document.writeln("<h"+i+">Günseli Çolak</h"+i+">");
 }


 /*
2. Ödev
    Ekrana 1-10 arasındaki sayıları alt alta tek yazdırarak
    karşılarına tek ya da çift olduklaruklarını yazdırın.
    
    1 Tek
    2 Çift
    .
    .
    .
    10 Çift
*/

    for(var i = 1; i<=10; i++)
    {
        if(i%2==0)
        {
            document.write(i+" Çift <br>");
        }
        else{
            document.write(i+" Tek <br>");
        }
    }
