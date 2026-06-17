let vidaJ = 20;
let vidaIN = 20;

const ataque = document.getElementById("atak");
const curar = document.getElementById("cura");
const displayVidaJ = document.getElementById("vida");
const displayVidaI = document.getElementById("vidaI");

displayVidaJ.innerHTML = vidaJ;
displayVidaI.innerHTML = vidaIN;

////////////AÇÕES-ATAQUE///////
ataque.addEventListener('click', function(){
    /////////JOGADOR/////////////////////////////
    const chance = ["acerta", "erra", "acerta"];
    const sorte = chance.sort(() => 0.5 - Math.random())[0];
    ///////MUDA A IMAGEM/////
    document.body.style.backgroundImage = "url('img/ataque.png')";
    setTimeout(()=>{
        document.body.style.backgroundImage = "url('img/parado.png')";
    }, 1000);
    //////////////////////////////////////
    if (sorte=="acerta") {
        vidaIN -= 4;
        displayVidaI.innerHTML = vidaIN;
        console.log("Você acertou o ataque");
        
    }else{
        console.log("Você errou o ataque");
    };
    
    ////////INIMIGO//////////////////////
    const AtakCuraI = ["atk", "cura", "atk"]
    const AtkCur = AtakCuraI.sort(() => 0.5 - Math.random())[0];

    if (AtkCur == "atk"){
        const sorteI = chance.sort(() => 0.5 - Math.random())[0];

        if (sorteI == "acerta"){
            vidaJ -= 4;
            displayVidaJ.innerHTML = vidaJ;
            console.log("O inimigo fez um ataque e acertou")
        }else{
            console.log("O inimigo fez um ataque e errou")
        }
    }if(AtkCur == "cura"){
        if (vidaIN >0 && vidaIN <= 20){
            vidaIN += 3;
            displayVidaI.innerHTML = vidaIN;
            console.log("Inimigo se curou")
        }if (vidaIN > 0 && vidaIN >= 20){
            vidaIN -= 5;
            displayVidaI.innerHTML = vidaIN;
            console.log("Inimigo tentou se curar demais e pagou o preço")
        };

    };
});

///////////////////AÇÕES-CURA///////////////////////////////////
curar.addEventListener('click', function(){
    ///////MUDA A IMAGEM/////
    document.body.style.backgroundImage = "url('img/cura.png')";
    setTimeout(()=>{
        document.body.style.backgroundImage = "url('img/parado.png')";
    }, 1000);
    //////////////////////////////////////
    if (vidaJ > 0 && vidaJ <= 20){
        vidaJ += 3;
        displayVidaJ.innerHTML = vidaJ;
        console.log("Curado");
    }if (vidaJ > 0 && vidaJ >= 20){
        vidaJ -= 5;
        displayVidaJ.innerHTML = vidaJ;
        console.log("Tentou se curar demais");
    };

    ///////////////INIMIGO/////////////////////////////////////
    const AtakCuraI = ["atk", "cura", "atk", "atk"]
    const AtkCur = AtakCuraI.sort(() => 0.5 - Math.random())[0];
    /////////////ATAQUE//////////////
    if (AtkCur == "atk"){
        const chanceI = ["acerta", "erra", "acerta"];
        const sorteI = chanceI.sort(() => 0.5 - Math.random())[0];

        if (sorteI == "acerta"){
            vidaJ -= 4;
            displayVidaJ.innerHTML = vidaJ;
            console.log("O inimigo fez um ataque e acertou")
        }else{
            console.log("O inimigo fez um ataque e errou")
        };
    }if(AtkCur == "cura"){///////////////CURA//////////////
        if (vidaIN >0 && vidaIN <= 20){
            vidaIN += 3;
            displayVidaI.innerHTML = vidaIN;
            console.log("Inimigo se curou")
        }if (vidaIN > 0 && vidaIN >= 20){
            vidaIN -= 5;
            displayVidaI.innerHTML = vidaIN;
            console.log("Inimigo tentou se curar demais e pagou o preço")
        };

    };


});


