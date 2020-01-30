import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';


const PlayerForm = () => {

    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [primaryPosition, setPrimaryPosition] = useState("PG");

    const onSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:9000/api/lakers/add', {
            firstName,
            lastName,
            primaryPosition
        })
            .then(res => {
                navigate('/');
            })
            .catch( err => {
                const errorResponse = err.response.data.errors;
                const errorArray =[];
                for(const key of Object.keys(errorResponse)){
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray);
            })
    }

    return(
        <>
            <p> <Link to ='/lakers/roster'>Roster Dashboard</Link> {''} <Link to = '/status/game/1'>Player Status</Link> </p>

            {errors.map ((err, index) => 
                <p key ={index}> {err} </p>
            )}

            <form onSubmit ={onSubmit}>
                <label>First Name: </label>
                <input type = "text" onChange = {(event) => setFirstName(event.target.value)}/>
                <br/>
                <label>Last Name: </label>
                <input type = "text" onChange = {(event) => setLastName(event.target.value)}/>
                <br/>
                <label>Primary Position: </label>
                <select onChange = {(event) => setPrimaryPosition(event.target.value)}>
                    <option value = 'PG'> PG </option>
                    <option value = 'SG'> SG </option>
                    <option value = 'SF'> SF </option>
                    <option value = 'PF'> PF </option>
                    <option value = 'C'> C </option>
                </select>
                <br/>
                <Link to ='/'>Cancel</Link>
                <span>    </span>
                <button>Submit</button>
            </form>

        </>
    )


}

export default PlayerForm