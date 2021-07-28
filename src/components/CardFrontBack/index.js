import CardGame from "../CardGame";
import './style.css';



function CardFrontBack () {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target; //target é o elemento html origem do click;
        const $cardFrontBack = $origin.closest('.card-front-back');

        // if ($cardFrontBack.classList.contains('-active')) {
        //     $cardFrontBack.classList.remove('-active');
        // } else {
        //     $cardFrontBack.classList.add('-active')
        // toggle faz a função desse if inteiro, verifica se tem a classe, se tiver ele remove, se não tiver ele adiciona.}

        $cardFrontBack.classList.toggle('-active');

    }


    return /*html*/`
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", 'Logo do JavaScript')}
            </div>
        </article>
    `;
}

export default CardFrontBack;