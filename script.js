
let button = document.querySelector(".button-enviar");

button.addEventListener("click", function () { 

  let respostaQuiz = document.querySelector(
    'input[name="pergunte1"]:checked'
);

if (respostaQuiz === null) {
    document.getElementById("mensagem").textContent = "Por favor escolha uma alternativa!";
    return;
}
      if(respostaQuiz.value === "Pelé") {
        document.getElementById("mensagem").textContent = "Muito bem você acertou, Parabéns!";
      }else {
        document.getElementById("mensagem").textContent = "Voce errou, tente novamente!";
      }

});

button.addEventListener("click", function () { 

  let respostaQuiz = document.querySelector(
    'input[name="pergunte2"]:checked'
);

if (respostaQuiz === null) {
    document.getElementById("mensagem1").textContent = "Por favor escolha uma alternativa!";
    return;
}
      if(respostaQuiz.value === "1000") {
        document.getElementById("mensagem1").textContent = "Muito bem você acertou, Parabéns!";
      }else {
        document.getElementById("mensagem1").textContent = "Voce errou, tente novamente!";
      }

});

button.addEventListener("click", function () { 

  let respostaQuiz = document.querySelector(
    'input[name="pergunte3"]:checked'
);

if (respostaQuiz === null) {
    document.getElementById("mensagem2").textContent = "Por favor escolha uma alternativa!";
    return;
}
      if(respostaQuiz.value === "5") {
        document.getElementById("mensagem2").textContent = "Muito bem você acertou, Parabéns!";
      }else {
        document.getElementById("mensagem2").textContent = "Voce errou, tente novamente!";
      }

});


  

