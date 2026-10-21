const button=document.getElementById("myb");
const myD=document.getElementById("myD");

 

button.addEventListener("click",function(){
    if(myD.style.display==="none"){
        myD.style.display="block";
        button.textContent="HIDE";
        myD.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore doloremque autem incidunt delectus rerum deleniti voluptates dolor quasi sed itaque possimus animi ipsum explicabo exercitationem quidem eius ut repudiandae.";
        
    }
    else{
        
        myD.style.display="none";
        button.textContent="SHOW";
        
    }
});
