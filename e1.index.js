let Reset= document.getElementById("reset");
let Answers= document.getElementById("answer");
let correction= document.getElementById("correction");
let result= document.getElementById("result");
let ids = [
    "q1a", "q1b", "q1c","q1d"
    "q2a", "q2b", "q2c","q2d"
    "q3a", "q3b", "q3c","q3d"
    "q4a", "q4b", "q4c","q4d"
    "q5a", "q5b", "q5c","q5d"
];

for (let id of ids) {
    window[id] = document.getElementById(id);
}

//for the correction button!
correction.onclick=function(){
    let score=0;
    if (q1a.checked && q1b.checked && q1c.checked && !q1d.checked ) score++;
    if (q2a.checked && q2b.checked && q2c.checked && !q2d.checked) score++;
    if (q3b.checked) score++;
    if (q4c.checked) score++;
    if (q5a.checked && q5b.checked && !q5c.checked && q5d.checked) score++;
    result.textContent="You're mark:"+score+"/5";
};
//for the reset button!
Reset.onclick=function(){
  
    let choice = document.querySelectorAll("input");

    for (let i = 0; i < choice.length; i++) {
        choice[i].checked = false;
    }
    result.textContent = "";
};
//for  the answers button!
 Answers.onclick = function() {
    let f=window.open("","_blank");
    f.document.write("<p>1.Solide, Liquide, Gazeux </p>");
    f.document.write("<p>2.HTML, CSS, JavaScript </p>");
    f.document.write("<p>3.href </p>");
     f.document.write("<p>4.color </p>");
    f.document.write("<p>5.getElementById(),querySelector(),getElementByClass()");
};