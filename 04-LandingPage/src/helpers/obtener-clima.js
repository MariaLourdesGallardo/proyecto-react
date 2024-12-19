export const obtenerClima = async (lat,lon) =>{
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=46c20e2ffb0a3d61869d7d48f39c1b39`)
    const data = await resp.json()

    return data
    
}