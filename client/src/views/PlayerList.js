import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';



const PlayerList = props =>{

    const[players, setPlayers] = useState([]);

    useEffect( ()=> {
        axios.get('http://localhost:9000/api/lakers/players')
            .then( res => setPlayers(res.data))
    },[])

    const onDelete = playerID => {
        axios.delete('http://localhost:9000/api/lakers/' + playerID)
        .then( res => {
            removeFromDom(playerID);
            // navigate('/');
        })
    }
    
    const removeFromDom = playerId => {
        let newPlayers = [];
        for( let i = 0; i < players.length; i++){
            if(players[i]._id !== playerId){
                newPlayers.push(players[i]);
            }
        }
        setPlayers(newPlayers);
        // setPlayers(players.filter((player) => player._id !== playerId))
    }


    return(
        <>

        {/* <p> <a href = '/'>Roster Dashboard</a> <a href = '/status'>Player Status</a> </p> */}
        <p> <Link to ='/lakers/roster'>Roster Dashboard</Link> {''} <Link to = '/status/game/1'>Player Status</Link> </p>

        <h3> <Link to ='/lakers/roster'>List</Link> <Link to ='/lakers/add'>Add Player</Link> </h3>
        <table>
            <thead>
                <tr>
                    <td>Player Name</td>
                    <td>Primary Position</td>
                    <td>Remove</td>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => {
                    return(
                        <tr  key ={index}>
                            <td>
                                <p>{player.firstName} {player.lastName}</p>
                            </td>
                            <td>
                                <p>{player.primaryPosition}</p>
                            </td>
                            <td>
                                <button onClick = {event => {onDelete(player._id)}} >Remove</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )

}


export default PlayerList