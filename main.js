import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

// 1) jQuery

// 2) consumindo uma api do DOM pra buscar o elemento HTML através da seu id e guardar na variável #root

// 3) BOA PRÁTICA: Toda variável que aguardar um elemento da tela (Html render) deve ter o $ como antecipação.

//Root é a representação da div em formato HTML.

//Não usar innerHTML por causa de segurança.

// insertAdjacentHTML ("primeiro parametro são 4 possibilidades e diz respeito ao posicionamento do html inserido em relação à div", segundo parâmetro é a string html do nosso código
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML