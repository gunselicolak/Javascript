var programlamaDilleri;

programlamaDilleri = new Array("PHP", "CSS", "HTML", "Javascript");

document.write(programlamaDilleri+ "<br>");
document.write(programlamaDilleri[0]+ "<br>");

/*
    for döngüsü ile bütün dizi elemanlarını
    tek seferde yazdırmak
*/

for (i=0; i<=9; i++)
{
    document.write(programlamaDilleri[i]+ "<br>");
}

/*
    for in döngüsü ile bütün dizi elemanlarını 
    tek seferde yazdırmak
*/

for (key in programlamaDilleri)
{
    document.write(programlamaDilleri[key] +"<br>");
}

// Çok Boyutlu Diziler 

var program = new Array("Java", "C++")
var programlar = new Array(2);

for(i = 0; i<2; i++)
{
    programlar[i]=new Array(2);
}

programlar[0][0] = "Günseli Çolak";
programlar[0][1] = "Repo";
programlar[0][2] = "Github";

programlar[1][0] = "Günseli Çolak";
programlar[1][1] = "Repo";
programlar[1][2] = "Github";

for(i = 0; i<2; i++)
{
    document.write(program[i]+ "<br>");

    for(var j = 0; j<3; j++)
    {
        document.write(programlar[i][j]+ "<br>");
    }
}

// Dizi Fonksiyonları
document.write("-------------DİZİ FONKSİYONLARI-----------" + "<br>")

// toString
document.write("toString: "+ "<br>");
document.write(programlamaDilleri.toString()+ "<br>"+ "<br>");
//document.write(programlamaDilleri);

//join
document.write("join: "+ "<br>");
document.write(programlamaDilleri.join("-")+ "<br>"+ "<br>");

//pop
document.write("pop: "+ "<br>");
document.write(programlamaDilleri.pop()+ "<br>"+ "<br>");

//push
document.write("push: "+ "<br>");
document.write(programlamaDilleri.push("Java")+ "<br>"); // eleman sayısı döner
programlamaDilleri.push("C++"); // eleman ekler
document.write(programlamaDilleri + "<br>"+ "<br>");

//shift
document.write("shift: "+ "<br>");
document.write(programlamaDilleri[0]+ "<br>");
programlamaDilleri.shift(); // ilk indisi siler
document.write(programlamaDilleri[0]+ "<br>"+ "<br>");

//unshift
document.write("unshift: "+ "<br>");
programlamaDilleri.unshift("PHP");
document.write(programlamaDilleri[0]+ "<br>"+ "<br>");

//splice
document.write("splice: "+ "<br>");
programlamaDilleri.splice(5,0,"1","2");
document.write(programlamaDilleri+ "<br>");

programlamaDilleri.splice(2,2,"1","2");
document.write(programlamaDilleri+ "<br>");

programlamaDilleri.splice(5,2);
document.write(programlamaDilleri+ "<br>"+ "<br>");

//delete
document.write("delete: "+ "<br>");
delete programlamaDilleri[4];
document.write(programlamaDilleri+ "<br>");
document.write(programlamaDilleri[4]+ "<br>"+"<br>");
programlamaDilleri[4] = "C++" ;

//concat
document.write("concat: "+ "<br>");
var programlamaDil1 = new Array("PHP", "Javascript");
var programlamaDil2 = new Array("HTML", "CSS");
var programlamaDil3 = new Array("Java", "C++");

document.write(programlamaDil1+ "<br>");
document.write(programlamaDil2+ "<br>");
document.write(programlamaDil3+ "<br>");

var programlamaDilleri = programlamaDil1.concat(programlamaDil2, programlamaDil3);
document.write(programlamaDilleri+ "<br>"+ "<br>");

//slice
document.write("slice: "+ "<br>");
parcala = programlamaDilleri.slice(1,3);
document.write(parcala+ "<br>"+ "<br>");

//length
document.write("length: "+ "<br>");

var sayi = programlamaDilleri.length;

for(i=0; i<sayi; i++)
{
    document.write(programlamaDilleri[i]+ "<br>")
} 

document.write("Bu dizinin eleman sayısı: " +programlamaDilleri.length+ "<br>"+ "<br>");

//reverse
document.write("reverse: "+ "<br>");
document.write(programlamaDilleri+ "<br>");
programlamaDilleri.reverse();
document.write(programlamaDilleri+ "<br>"+ "<br>");


//sort
document.write("sort: "+ "<br>");
programlamaDilleri.sort();
document.write(programlamaDilleri+ "<br>"+ "<br>");

//indexof
document.write("indexof: elemanın dizi içerisindeki konumu "+ "<br>");
document.write(programlamaDilleri.indexOf("PHP")+"<br>"+"<br>");

//some : true/false 
document.write("some: "+ "<br>");
    var yas = new Array(5,8,9,11,18);
    function yasKontrol(events){
        return events >= 18;
    }

    document.write(yas.some(yasKontrol));
