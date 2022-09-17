import react from 'react'
import Card from  './Card'
const CardList = ({robots})=>{

    const robotArray= robots.map((user,i) => { 
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div>
        {robotArray}
        </div>
        
    )

} 
export default CardList;