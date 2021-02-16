/*
for döngüsü

    i = 0 => döngününün başlangıç değeri 
    i <= => döngününün sonlanacağı koşulu
    i++ => her döngüde artış miktarın 
*/
  
/*
    var i;
    for (i = 1; i<= 10; i++){
        document.writeln(i);
    }

    var j;
    for (j= 1; j<= 10; j+=2){
        document.write(j+"<br>");
    }
*/

//while döngüsü

/*
    var i = 1;

    while(i<=10)
    {
        document.write(i+".sayı <br>");
        i++;
    }
*/

// do while
/*
    var i = 5;

    do
    {
        document.write("Sayı "+i+ "<br>");
        i++;
    }
    while(i<10);
*/

// for in 
/*
var progDil = {dil1: "PHP", dil2:"Javascript"};

for(key in progDil)
{
    document.write(progDil[key]+"<br>");
}
*/

// dizi örneği
/*
var progDil = new Array("PHP", "Javascript", "HTML")

for(key in progDil)
{
    document.write(progDil[key]+"<br>");
}
*/

// iç içe döngü mantığı ve çarpım tablosu
/*
var x, y;

for(x=1; x<=10; x++){
    for(y=1; y<=10; y++){
        document.write(x+"x"+y+"="+x*y+"<br>");
    }
}
*/

// break deyimi 
/*
for(i = 1; i<=10; i++)
{
    document.write(i+"<br>");
    if(i == 5)
    {
        document.write("5. sayıya geldiniz durun <br>");
        break; // koşul sonlandırma
    }
}
*/

// continue deyimi
/*
for(i = 1; i<=10; i++)
{
    if(i == 5 || i == 10)
    {
        continue; // dikkate alma(atla)
    }
    document.write(i+"<br>");
}
*/