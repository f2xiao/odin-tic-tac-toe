import GameController from "./GameController" ;
import './style.css';


const game = GameController();

game.playerRound(0,0);
game.playerRound(0,2);
game.playerRound(1,1);
game.playerRound(1,2);
game.playerRound(2,2);
