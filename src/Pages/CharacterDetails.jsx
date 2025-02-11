import axios from "axios";
import { useState } from "react";
import { Link, useParams} from "react-router-dom"



function CharacterDetails(){

    // for each individual call from the database
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(()=>{
        axios.get(`https://ih-crud-api.herokuapp.com/characters ${characterId}`)
        .then( response =>{
            console.log(response.data)
            setCharacter(response.data)
        })
        .catch( e =>console.log("error in", e))
    })
    if (character === null){
        return <h2> Loading...</h2>
    }

    return(
        <div className="box">
             <h2>{character.name}</h2>
             <p>Occupation: {character.occupation}</p>
             <p>debt: {character.debt ? "yes": "No"}</p>
        <Link to="/">
            <button> Home </button>
        </Link>
        </div>
       
    )
}

export default CharacterDetails