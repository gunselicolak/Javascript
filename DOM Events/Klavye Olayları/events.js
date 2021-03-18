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
// klavyede herhangi tıklama
function down(){
    document.getElementById("sec").style.backgroundColor="red";
}
function up(){
    document.getElementById("sec").style.backgroundColor="green";
}
function islem3(event){
    var x = document.getElementById("cikti3");

    if(event.altKey){
        x.innerHTML="ALT tuşuna basıldı.";
    }
    else if(event.ctrlKey){
        x.innerHTML="CTRL tuşuna basıldı.";
    }
    else if(event.shiftKey){
        x.innerHTML="SHIFT tuşuna basıldı."
    }
}
