const submit=document.getElementById("myb");
let Name= document.getElementById("myN");
let Email =document.getElementById("myE");
const war=document.getElementById("alert");

submit.onclick=function(){
    if(Name.value==="" || Email.value==="" ){
        war.textContent="Please make sure you fill in all !";
    }
    else{
        war.textContent="The name and the email have been failled successfully !";
    }
};