const startButton = document.getElementById('startButton');
const messageContainer = document.getElementById('messageContainer');
const messageText = document.getElementById('messageText');
const nextButton = document.getElementById('nextButton');
const specialButton = document.getElementById('specialButton');

const messages = [
  "Meu bem, sei que este tem sido um ano bem complicado, mas sabe, uma das coisas que mais me marcou foi a primeira vez que ficamos, ou tipo, quando você me chamou no WhatsApp e uma vez admitiu que gostava de mim.",
  "A gente nunca chegou a ficar de fato, mas eu sempre considerei que tivemos um lancinho kkk é inegável que rola uma química entre eu e você na maioria do tempo, e eu sei que você disse que pensaria na questão de ficar comigo, não sei se falou sério ou brincando, mas acho eu que foi verdade kkk.",
  "E assim, você sabe que eu admiro cada cantinho seu, seu jeito por completo, a forma como você reage às coisas e principalmente a algumas coisas que eu te digo kkkkk você além de ser muito querida, é com certeza uma mulher que eu quero ao meu lado, caso futuramente aceite né, até porque você é diferente.",
  "Vira e mexe eu me encontro pensando em ti, se poderíamos passar um momento juntos, passar mais tempo dando boas risadas como sempre fazemos, os carinhos que você me dava e que eu retribuía e até mesmo os abraços que você começou a dar mais em seguida né? kk Bom, você futuramente aceitando ou não, eu só queria dizer que você é uma jóia rara, preciosa e única para mim e que você é a melhor garota que já passou pela minha vida, minha princesinha linda, minha pretinha, eu te amo demais!  ❤ ❤ ❤ ❤ ❤ ❤."
];

let currentMessage = 0;

startButton.addEventListener('click', () => {
  startButton.classList.add('hidden');
  messageContainer.classList.remove('hidden');
  showMessage();
});

nextButton.addEventListener('click', () => {
  currentMessage++;
  if (currentMessage < messages.length - 1) {
    showMessage();
  } else {
    showMessage();
    nextButton.classList.add('hidden');
    specialButton.classList.remove('hidden');
  }
});


function showMessage() {
  messageText.textContent = messages[currentMessage];
  nextButton.classList.remove('hidden');
}
