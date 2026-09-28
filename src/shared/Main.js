import React, {Component} from 'react';
import PlayersPPresentation from './PlayersPresentation';
import { Players } from './shared/ListOfPlayers';
export class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            players: Players
        };
    }
    render(){
        return<PlayersPPresentation players={this.state.players} />
    }
}
export default Main;
