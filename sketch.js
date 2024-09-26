let suaidade;
let salgado;
let doce;
let agridoce;
let título;
let corpo;
let comidas ={
  menor10:{
    salgado: "mini pizza",
    doce: "cookies",
    agridoce: "frango ao molho de mel"
  },
  entre10e14:{
  salgado:"tacos",
  doce:"brownies",
  agridoce:"salada de frutas com iogurte e mel"
},
 entre14e16:{
  salgado:"nachos",
  doce:"muffins",
  agridoce:"quinoa com fruta agridoce"
},
entre16e18:{
  salgado:"pasta com molho",
  doce:"pavê",
  agridoce:"picanha com molho de laranja"
},
 maior18:{
  salgado:"risoto",
  doce:"panha cotta",
  agridoce:"camarões ao molho agridoce"
}
};

let button;


function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(600,530).addClass("hidden");
  suaidade = createInput("").position(600,585).addClass("hidden");
  salgado = createCheckbox("Gosta de mini pizza? 🍕").position(100,600).addClass("hidden");
  doce = createCheckbox("Gosta de cookies? 🍪").position(100,650).addClass("hidden");
  agridoce = createCheckbox("Gosta de frango ao molho de mel? 🍗🍯").position(100,700).addClass("hidden");
  título="Pacifico"
  corpo =  "Raleway";
 button = createButton  ("APERTE AQUI").position(width/2,585).id("botao");
  button.mousePressed(bota);
  button.addClass("botao")
}

function bota(){
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));
    button.hide();
}
function draw() {
  background("rgb(255,255,255)");
 
  
  let idade = parseInt(suaidade.value());
  let checksalgado = salgado.checked();
  let checkdoce = doce.checked();
  let checkagridoce = agridoce.checked();
  let comida = "Insira suas preferências";
  if (suaidade.value()!== ""){
    comidas = mostracomida(idade,checksalgado, checkdoce, checkagridoce )
  }
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(comida, width/2, height/2);
  textFont(título);
  
   fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHORES TIPOS DE COMIDAS",width/2, 30);
  textFont(corpo);
}

  function mostracomida(idade,checksalgado, checkdoce, checkagridoce ){
    if (isNaN(idade)){
      return "Idade inválida";
    }else
      if (idade < 5){
    return "Sai daqui seu menor"
          }else
      if (idade >120){
    return "Sai seu difunto"
        
    }
    if (idade >= 5 && idade < 10){
      if (checksalgado){
     return comidas ["menor10"]["salgado"];
      }
       if (checkdoce){
     return comidas ["menor10"]["doce"];
    }
          if (checkagridoce){
     return comidas ["menor10"]["agridoce"];
  }
    }
    else  if (idade >= 10 && idade < 14){
      if (checksalgado){
     return comidas ["entre10e14"]["salgado"];
      }
       if (checkdoce){
     return comidas ["entre10e14"]["doce"];
    }
          if (checkagridoce){
     return comidas ["entre10e14"]["agridoce"];
  }
    }
   else    if (idade >= 14 && idade < 18){
      if (checksalgado){
     return comidas ["entre14e16"]["salgado"];
      }
       if (checkdoce){
     return comidas ["entre14e16"]["doce"];
    }
          if (checkagridoce){
     return comidas ["entre14e16"]["agridoce"];
  }
    }
     else  if (idade >= 16 && idade < 18){
      if (checksalgado){
     return comidas ["entre16e18"]["salgado"];
      }
       if (checkdoce){
     return comidas ["entre16e18"]["doce"];
    }
          if (checkagridoce){
     return comidas ["entre16e18"]["agridoce"];
  }
    }
    else   if (idade > 18){
      if (checksalgado){
     return comidas ["maior18"]["salgado"];
      }
       if (checkdoce){
     return comidas ["maior18"]["doce"];
    }
          if (checkagridoce){
     return comidas ["maior18"]["agridoce"];
  }
    }
  }



