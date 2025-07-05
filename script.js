let contador = 0;
  const botao = document.getElementById('meuBotao');
  const spanContador = document.getElementById('contador');

  botao.addEventListener('click', () => {
    contador++;
    spanContador.textContent = `Beijos: ${contador}`;
  });