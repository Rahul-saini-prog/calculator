let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');
let string = '';
buttons.forEach(element=>{
       element.addEventListener('click' ,(e)=>{
                 if(e.target.innerText == '='){
                    string = String(eval(string))
                    input.value = string;
                 }
                 else if(e.target.innerText == 'AC'){
                    string = '';
                    input.value = string;
                 }
                 else if(e.target.innerText == 'DEL'){
                    string = string.substring(0 , string.length-1);
                    input.value = string;
                 }
                 else if(e.target.id == 'plusMinus'){
                    string = String(-eval(string));
                    input.value = string;
                 }
                 else{
                    string = string+e.target.innerText;
                    input.value = string;
                 }
       } )
})