var data = new Date()
var tempo = data.getHours()
var imagem = document.querySelector("#foto")//variável de ligação ligando na src da imagem para modificar ela
var horario = document.querySelector("#Horario")//Aqui é onde vai mostrar a hora
var seção = document.querySelector("#secao")//Essa é para mudar o fundo da section de forma mais prática
var saudação = document.querySelector("#Saudação")


if(tempo >= 0 && tempo <= 5){//Condição de IF para dar boa tarde, boa noite ou bom dia para as respectivas horas do dia
   saudação.innerText = " Boa madrugada!"    
   sumir.innerText = ""

   } else if(tempo > 5 && tempo < 12){
    saudação.innerText = " Bom dia!"
    sumir.innerText = ""
    
   } else if ( tempo >= 12 && tempo <= 16){
    saudação.innerText = " Boa tarde!"
    sumir.innerText = ""
   
   } else if ( tempo >= 17 && tempo <= 18){
    saudação.innerText = " Boa tardezinha!"
    sumir.innerText = ""
    
   } else if ( tempo > 18 && tempo <= 23 ){
    saudação.innerText = " Boa noite!"
    sumir.innerText = ""
    
   } else if (tempo == 24){ 
    saudação.innerText = `Ué, em que mundo você está?? porquê são ${tempo} horas???... ei, você não quis dizer 0 horas?`
    sumir.innerText = ""
    
   } else {
    saudação.innerText = `Ué, em que mundo você está?? porquê são ${tempo} horas???`
    sumir.innerText = ""

   }


switch (tempo){//tem que pôr uma variável pra analisara as possibilidades

 case 0:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/0.png"
    break;

 case 1:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/1.png"
    break;

 case 2:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/2.png"
    break;

 case 3:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/3.png"
    break;

 case 4:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/4.png"
    break;

 case 5:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/5.png"
    break;

 case 6:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/6.png"
    break;

 case 7:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/7.png"
    break;

 case 8:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/8.png"
    break;

 case 9:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/9.png"
    break;
    
    case 10:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/10.png"
    break;
        
 case 11:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/11.png"
    break;
            
 case 12:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/12.png"
    break;
                
 case 13:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/13.png"
    break;
                    
 case 14:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/14.png"
    break;

 case 15:
     horario.innerText += ` ${tempo} horas`
     imagem.src = "Horários/15.png"
     break;
     
     case 16:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/16.png"
    break;

 case 17:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/17.png"
    break;

    case 18:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/18.png"
    break;

 case 19:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/19.png"
    break;

 case 20:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/20.png"
    break;

 case 21:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/21.png"
    break;

 case 22:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/22.png"
    break;

    case 23:
    horario.innerText += ` ${tempo} horas`
    imagem.src = "Horários/23.png"
    break;

 default:
   imagem.src = "Horários/error!.png"
}