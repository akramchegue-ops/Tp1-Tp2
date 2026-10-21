const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}
function remove(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}