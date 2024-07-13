let input=document.getElementById("");
let button=document.querySelectorAll("button");


let string ="";

let arr=Array.from(button);
arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHtml=='='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHtml=='Del'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }

        else if(e.target.innerHtml=='Ac'){
            string="";
            input.value=string;
        }

        else
        string+=e.target.innerHtml
    input.value=string;
    })
})

