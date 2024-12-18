import { useState } from 'react'
//import './App.css'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import CardApp from './components/CardApp'
import {detalleCard} from './data/data.js'

function App() {
  

  return (
    <>
      <main>
        <NavBar/>
      </main>
      <div>
        <Carousel/>
      </div>
      <div className='container'>
        <div className="row my-5">
          {detalleCard.map( (item, index) =>(
            <CardApp
              key={index}
              item={item} />
          ) )}
        </div>
      </div>
      
    </>
  )
}

export default App
