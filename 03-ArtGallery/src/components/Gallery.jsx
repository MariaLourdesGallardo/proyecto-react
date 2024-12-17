import { useState } from "react"
import {sculptureList} from "../data/data.js"
import { GaleryDetails } from "./GaleryDetails.jsx";


export function  Gallery (  ) {
    const [index, setIndex] = useState (0);
    const [show, setShow] = useState (false);
    

    let escultura = sculptureList[index]

    const handlePrev = () => {
        setIndex( index - 1)
    }
    const handleNext = () => {
        setIndex( index + 1)
    }
  

    return (
       <main>
        <h1>Gallery</h1>
        <div>
            <button 
                onClick={handlePrev}
                disabled ={index===0}
            >
                Prev
            </button>
            <button 
                onClick={handleNext}
                disabled={index +1 === sculptureList.length}   
            >
                Next
            </button>
        </div>
        
        
        <div>
            <h2> {escultura.name} by {escultura.artist} </h2>
            <div>{index + 1} de {sculptureList.length} </div>
            <img src={escultura.url}  alt={escultura.alt} />
        </div>
        <button onClick={()=> setShow (!show) }>
            {show ? 'Hidden Details' : 'Show Details'}
        </button>
        <div> 
            {
                show && 
                    <GaleryDetails
                        descripcion = {escultura.description} 
                    />
            }  
        </div>

      
        
       </main>
    )
}