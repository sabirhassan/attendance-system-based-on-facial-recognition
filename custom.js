


var xhttp = new XMLHttpRequest();
var obj;
xhttp.open("GET", "values.json", true);
xhttp.send();
xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
             obj = JSON.parse(xhttp.responseText);
        }   
    };

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode < 48 || charCode > 57)
        return false;

    return true;
}

function filladd() {
    document.getElementById("first_add").value=obj.values.add.first;
    document.getElementById("second_add").value=obj.values.add.second;    
}


function fillsub() {
    document.getElementById("first_sub").value=obj.values.sub.first;
    document.getElementById("second_sub").value=obj.values.sub.second;

}
function fillmultiply() {
    document.getElementById("first_multiply").value=obj.values.multiply.first;
    document.getElementById("second_multiply").value=obj.values.multiply.second;
}
function filldivide() {
    document.getElementById("first_divide").value=obj.values.divide.first;
    document.getElementById("second_divide").value=obj.values.divide.second;
}

function addnumbers() 
{
   let n1= document.getElementById("first_add").value;
   let n2= document.getElementById("second_add").value;
   let re = /[0-9]+/;
   let result = +n1 + +n2;
   document.getElementById("add_result").value = result; 
         
}

function subnumbers() 
{
   let n1= document.getElementById("first_sub").value;
   let n2= document.getElementById("second_sub").value;
   let re = /[0-9]+/;
   let result = +n1 - +n2;
   document.getElementById("sub_result").value = result; 
         
}

function multiplynumbers() 
{
   let n1= document.getElementById("first_multiply").value;
   let n2= document.getElementById("second_multiply").value;
   let re = /[0-9]+/;
   let result = +n1 * +n2;
   document.getElementById("multiply_result").value = result; 
        
}

function dividenumbers() 
{
   let n1= document.getElementById("first_divide").value;
   let n2= document.getElementById("second_divide").value;
   let re = /[0-9]+/;
 
   if(n2 != 0)
   {
       let result = +n1 * +n2;
       document.getElementById("divide_result").value = result; 
   }
   else 
   {
        alert("second operand in division should not be 0");
   }      
}