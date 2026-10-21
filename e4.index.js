let ids = [
    "myH1", "myM1", "myS1","myH2",
    "myM2", "myS2", "myH3","myM3",
    "myS3", "myJ", "myH","myM",
    "myS"
];

for (let id of ids) {
    window[id] = document.getElementById(id);
}


let addition=document.getElementById("myA");
let remove=document.getElementById("myR");

addition.onclick=function(){
let hours = Number(myH1.value)+Number(myH2.value)+Number(myH3.value);
let minutes = Number(myM2.value)+Number(myM2.value)+Number(myM3.value);
let seconds = Number(myS1.value)+Number(myS2.value)+Number(myS3.value);

let total = hours*3600 + minutes *60 +seconds;
myJ.value=Math.floor(total/86400);
total=total % 86400;

myH.value=Math.floor(total/3600);
total=total % 3600;

myM.value=Math.floor(total/60);
myS.value=Math.floor(total%60);

};

Reset.onclick=function(){
  
    let choice = document.querySelectorAll("input");

    for (let i = 0; i < choice.length; i++) {
        choice[i].checked = false;
    }
    result.textContent = "";
};