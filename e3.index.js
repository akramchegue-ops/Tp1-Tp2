function trier() {
   const numbers=[14,6,1,13,15,4,10,17,3,0,55,2,8]
    numbers.sort((a,b)=>a-b);
    
       for(let i=0;i<numbers.length;i++){
        result+=numbers[i]+" ";
      }
      document.getElementById("result").textContent=numbers;
    
}
trier();

