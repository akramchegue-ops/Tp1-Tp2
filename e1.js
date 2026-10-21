let button=document.getElementById("myB");
button.onclick=function(){
    if(document.getElementById("myD").style.backgroundColor==="yellow"){
       document.getElementById("myD").style.backgroundColor="white"; 
    }
 else{
    document.getElementById("myD").style.backgroundColor="yellow";
 }
}
