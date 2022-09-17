import react from 'react'
import Cardlist from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'



class App extends react.Component{
    constructor(){
        super();
        this.state={
            robots:[],
            Searchfield:''
        }
    }
    onSearchChange = (event)=>{
        this.setState({Searchfield:event.target.value})
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json()
            )
            .then(users=>
                this.setState({robots:users})
            )
    }
    render(){
        const filterRobots= this.state.robots.filter(robots=>{
            return(robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase()))
        })
        if (this.state.robots.length===0){
            return(
                <h1>loading</h1>
            )
        }else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robo friends</h1>
                    <SearchBox SearchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filterRobots}/>
                        </ErrorBoundry>

                    </Scroll>
                    
                </div>
        )
        }
        }    


    
}
export default App