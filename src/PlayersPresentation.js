import React from 'react';
export default function PlayersPPresentation({players}) {
    console.log(players);
    return(
        <div className="container">
            {players.map((player) => {
                return(
                    <div className="column" key={player.id}>
                        <div className="card">
                            <img src={player.img} alt={player.name}/>
                            <h3>{player.name}</h3>
                            <p className="title">{player.club}</p>
                            <p>
                                <button>Detail</button>
                            </p>
                        </div>
                    </div>
                );
            })} 
        </div>
    );
}