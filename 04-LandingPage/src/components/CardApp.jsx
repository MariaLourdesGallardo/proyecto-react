import React from 'react'

function CardApp({item}) {


  return (
    <div>
      <div className='col-12 col-md my-3'>
        <div className="card h-100">
          <div className="card-body d-flex flex-column align-items-center ">
            <i 
              className={`fa ${item.icono} fa-3x text-primary`}
              aria-hidden='true'
            >
            </i>
            <p className='text-muted'>{item.texto1} </p>
            <p className='text-muted'>{item.texto2} </p>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardApp