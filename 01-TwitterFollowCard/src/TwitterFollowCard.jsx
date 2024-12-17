import { useState } from "react"

export function TwitterFollowCard ( { username, name }){
    const imgSrc = `https://unavatar.io/${username}`

    const [isfollowing, setIsFollowing] = useState (false)

    const handleClick = () => {
        setIsFollowing (!isfollowing)
    }

    const text = isfollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isfollowing
    ? 'tw-card-button is-following'
    : 'tw-card-button'
    return(
        <article className='tw-card'>
             <header className='tw-card-header'>
                <img 
                    className='tw-card-headerImg'
                    src= {imgSrc} 
                    alt="foto de herrera" />
                <div className='tw-card-headerDiv'>
                    <strong> {name} </strong>
                    <span className='tw-card-headerDiv-span'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}  onClick={handleClick} >
                    {text} 
                </button>
            </aside>
        </article>
    )
}