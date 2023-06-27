//let num1 = 5;
//let num2 = 10;

//soma = num1+num2;

//console.log(soma);

//function soma(X, Y){
    //const resultado = X + Y;
    //return resultado;
//}
//console.log(soma(20 , 30));
//console.log(soma(15 , 55));

//function saudacao(){
    //console.log("Boa noite pessoal");
//}

//function imc(peso, altura){
  //  let resultado = peso / (altura * altura);}
    //if (resultado <= 24.9){
      //  return "Peso normal"

    //}

//console.log(imc( 80 , 1.80 ));
//console.log(imc( 70 , 1.50 ));
//console.log(imc( 90 , 2.0 ));
//console.log(imc( 50 , 1.60 ));

//function imc(X, Y){
  //  const resultado = X + Y;
    //return resultado;


function imc(peso, altura){
    let resultado  = peso / altura * altura;}
        if (resultado <= 24.9){
             return "Peso normal";
        }else if (resultado <=29.9 ){
            return "sobrepeso";
        }else if (resultado >= 34.9){
             return "obesidade grau I";
        }else if (resultado >= 39.9){
                return "obesidade grau II";
        }else (resultado >40)
                return "obesidade grau III";
        