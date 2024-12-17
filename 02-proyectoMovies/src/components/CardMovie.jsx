export function CardMovie( {peliculaContenida} ) {
    return(
        <div className='container-img' >
            <img 
                className='movie-grid-image'
                src={peliculaContenida.image} 
                alt={peliculaContenida.title} 
            />
        </div>
    )
}