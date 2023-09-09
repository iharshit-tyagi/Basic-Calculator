let buttons=document.querySelectorAll("button");
let numberOfButton=buttons.length;
let displayValue="";

// for(let i=0;i<numberOfButton;i++){
//     buttons[i].addEventListener("click",function updateDisplayValue(){

//         displayValue= displayValue+ buttons[i].innerHTML;
//         document.getElementById("display").value = displayValue;
//     });
// }
for(let i=0;i<numberOfButton;i++){
    buttons[i].addEventListener("click",function letsDoIt(){
        if(buttons[i].innerHTML==="C"){
          clearDisplay();
        }
        else if(buttons[i].innerHTML==="="){
            calculateResult();
        }
        else{
            updateDisplayValue(buttons[i].innerHTML);
        }
    });
}

function calculateResult(){
    try{
        const result=eval(displayValue);
        displayValue=result.toString();
        document.getElementById("display").value = displayValue;
    }
    catch(error){
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}
function clearDisplay(){
    displayValue="";
    document.getElementById("display").value = displayValue;
}
function updateDisplayValue(value){
     displayValue= displayValue+value;
     document.getElementById("display").value = displayValue;
}





 