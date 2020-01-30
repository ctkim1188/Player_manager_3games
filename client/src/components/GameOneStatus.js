import React, {useEffect, useState} from 'react';
import axios from 'axios';
import{Link} from '@reach/router';

const PlayerStatusGameOne = props => {

    const [players, setPlayers] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:9000/api/lakers/players')
            .then(res => {
                setPlayers(res.data)
            })
    },[])

    const onClick = (e, id, gameOneStatus) => {
        e.preventDefault();
        axios.put('http://localhost:9000/api/lakers/' + id, {
            gameOneStatus: gameOneStatus
        })
            .then(res => {
                console.log(res.data);
                let newPlayers = [];
                for(let i = 0; i < players.length; i++){
                    if(players[i]._id === res.data._id){
                        newPlayers.push(res.data);
                    }else{
                        newPlayers.push(players[i]);
                    }
                }
                setPlayers(newPlayers);
            })
    }

    // const updateDom = () => {
    //     // console.log(players);
    //     setPlayers(players);
    //     navigate('/status/game/1')
    // }

    return(
        <>
        <Link to ='/status/game/1'>Game 1</Link>
        <span>  </span>
        <Link to ='/status/game/2'>Game 2</Link>
        <span>  </span>
        <Link to ='/status/game/3'>Game 3</Link>
        <h2>Game One Status</h2>
        <table>
            <thead>
                <tr>
                    <td>Player</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => {
                    return(
                    <tr key ={index}>
                        <td>{player.firstName} {player.lastName}</td>
                        <td><button style={player.gameOneStatus === "yes" ? {background:"green", padding:"5px", borderRadius:"5px", border:"none"} : {background:"",padding:"5px", borderRadius:"5px", border:"none"}}  onClick = {(e) => {onClick(e,player._id, "yes")}} >Playing</button></td>
                        <td><button style={player.gameOneStatus === "no" ? {background:"red", padding:"5px", borderRadius:"5px", border:"none"} : {background:"",padding:"5px", borderRadius:"5px", border:"none"}} onClick = {(e) => {onClick(e,player._id, "no")}}>Not Playing</button></td>
                        <td><button style={player.gameOneStatus === "ukn" ? {background:"yellow", padding:"5px", borderRadius:"5px", border:"none"} : {background:"",padding:"5px", borderRadius:"5px", border:"none"}} onClick = {(e) => {onClick(e,player._id, "ukn")}}>Uncertain</button></td>
                    </tr>              
                    )
                })}
            </tbody>
        </table>
        

        </>
    )

}

export default PlayerStatusGameOne