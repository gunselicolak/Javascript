i=0;
function islem1(){
    //console.log("Olay Oldu");
    i+=1;

    document.getElementById("cikti1").innerHTML=i;
}
j=0;
function islem2(){
    j+=1;
    document.getElementById("cikti2").innerHTML=j;

    if(j>=160){
        document.getElementById("cikti2").innerHTML=i+" karakter aşımı yaşandı.";
    }
}
