import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage(){
    const [characters,setCharacters] = useState(null);

    useEffect(()=>{
        axios.get ("https://ih-crud-api.herokuapp.com/characters ")
        .then((response)=>{
            console.log(response.data)
            setCharacters(response.data.length)

        })
        .catch( e=> console.log("Error getting characters from API",e))
    }, []);

     if (characters === null){
        return <h2>Loading ...</h2>
     }
    
    return (
        <>
              <h2>Number of characters in the API: {characters.length}</h2>
              {characters.map( (characterObj,index) => {
                return (
                    <div  key= {index}className='box'>
                        <h3>{characterObj.name}</h3>
                        <p>Occupation: {characterObj.occupation } </p>
                    </div>
                
            )
              })}
        </>
      
    )


}