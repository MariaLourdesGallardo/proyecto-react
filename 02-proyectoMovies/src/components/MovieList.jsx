//import React from 'react'
import listaPelis from '../data/movies-1.json'
import { CardMovie } from './CardMovie';


export function MovieLista({cant}) {
    const nuevaListaFiltrada = listaPelis.filter( (movies) => {
        return movies.rank <= cant;
    } );
  
  return (
    <div>
        <h3> Las {cant} mejores peliculas!</h3>
        <div className='poster'>
            {nuevaListaFiltrada.map( (movies) => (
                <CardMovie 
                    peliculaContenida={movies}
                    key={movies.id}
                />
            ))}
        </div>
       
    </div>
  )

}
