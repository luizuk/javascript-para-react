import PlayerName from "../../components/PlayerName";

function Scoreboard () {
    
    return /*html*/`
        <header class="score-bird">
            ${PlayerName('Player1')}
            ${PlayerName('Player2')}
        </header>
    `;
}

export default Scoreboard;
