const buttonsE1 = document.querySelectorAll("button");
const inpE1=document.getElementById("result")
for(let i=0;i<buttonsE1.length;i++)
{
    buttonsE1[i].addEventListener("click",()=>{
        const bvalue=buttonsE1[i].textContent;
        if(bvalue==="C")
        {
            clearResult();
        }
        else if(bvalue==="=")
        {
            cal();
        }
        else
        {
            append(bvalue);
        }
    });
}
function clearResult(){
    inpE1.value="";
}
function cal() {
    inpE1.value=eval(inpE1.value);
}
function append(bvalue)
{
    inpE1.value+=bvalue;
}
