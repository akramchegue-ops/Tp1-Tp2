
let email =document.getElementById("myEmail");
let message=document.getElementById("message");
let submit=document.getElementById("mySubmit");

 
submit.onclick = function() {

if(email.value.includes("@") && email.value.indexOf("@") > 0 &&
    email.value.lastIndexOf(".") > email.value.indexOf("@") + 1 &&
    email.value.lastIndexOf(".") < email.value.length - 1){
 message.textContent="you're email is well contructed!";
}
else{
 
message.textContent="please make sure that you're email isn't empty or it contains @ symbol:";
}

};