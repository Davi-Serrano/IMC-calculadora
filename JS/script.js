 function Do(){
    var Name   = document.getElementById("Name")
  var Weight = document.getElementById("Weight")
  var Heigth = document.getElementById("Height")
  var res = document.getElementById("res")
   
    var c = Weight.value/Heigth.value**2
    var d = parseFloat(c.toFixed(2));
        
            if( 18.50 > d){
                res.innerText= `Hellow ${Name.value} your IMC are ${d}, Magreza `
            } 
            if(d > 24.9) {
                res.innerText= `Hellow ${Name.value} your IMC are ${d}, Sobrepeso `
            }
            if(d > 29.9){
                res.innerText= `Hellow ${Name.value} your IMC are ${d}, Obesidade Grau 1 ` 
           }
            if(d > 34.9){
                res.innerText= `Hellow ${Name.value} your IMC are ${d}, Obesidade Grau 2 ` 
            }
            if(d > 39.9){
                res.innerText= `Hellow ${Name.value} your IMC are ${d}, Obesidade Grau 3 ` 
            }
            if(18.51< d > 24.8){
                res.innerText= `Hellow ${Name.value} your IMC are ${d}, Saudável `
            }
}

function Clear(){
    var Name   = document.getElementById("Name")
    var Weight = document.getElementById("Weight")
    var Heigth = document.getElementById("Height")
    var res = document.getElementById("res") 
      
    Name.value = ""
        Weight.value = ""
        Heigth.value = ""
        res.innerText = ""
    }

 


