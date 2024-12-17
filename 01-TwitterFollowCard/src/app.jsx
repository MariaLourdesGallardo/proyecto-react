import { TwitterFollowCard } from './TwitterFollowCard'
import './app.css'

const users = [
    {
        username: 'midudev',
        name : 'Miguel Angel Duran',
        isfollowing : true 
    },
    {
        username : 'duko',
        name :'David Komelo',
        isfollowing : true , 
    },
    {
        username : 'nikinicole' ,
        name :'Nicky Nicole',
        isfollowing : false
    },
    {
        username : 'carlos_stro',
        name : 'Carlos StroMan',
        isfollowing : true
    }
]


export function App () {
    return (
        <section className='app'>
            {
                users.map( user => {
                    const {username , name , isfollowing} = user
                    return (
                        <TwitterFollowCard
                            username = {username}
                            name = {name}
                            inicialIsFollowing = {isfollowing}
                            key={username}
                        ></TwitterFollowCard>
                    )
                })
            }
        </section>
        
    )
}