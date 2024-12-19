import React, { useEffect, useState } from 'react'
import { obtenerClima } from '../helpers/obtener-clima'
import '../css/navbar.css'

function NavBar() {

    const [tiempo,setTiempo] = useState(null)

    
    useEffect( () =>{
        clima()
       
    },[] ) 

    const clima = () => {
        navigator.geolocation.getCurrentPosition( (pos) =>{
            const coords = pos.coords;
            const lat = coords.latitude;
            const lon = coords.longitude;
            
        obtenerClima( lat,lon )
        .then((response)=> {
            
            const {main,weather} = response;
                const tempCelsius = main.temp - 273.15;    

                setTiempo( {
                    temp: tempCelsius,
                    clima: weather[0],
                })
            })
        .catch( (err)=> console.log(err) )
            
        });

    }



  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                <a className="navbar-brand" href="#">
                    <i className='fa fa-ravelry' aria-hidden='true'></i>
                    RobotFun
                </a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link" href="#">Contacto</a>
                    </div>
                   
                </div>
                {tiempo&&(
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <img 
                                src={`https://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`} 
                                alt="Datos del clima" 
                                className = "icon-tiempo" />
                            <span> {Math.round(tiempo.temp)}˚C</span>
                        </div>
                    )}
            </div>
        </nav>
  )
}

export default NavBar