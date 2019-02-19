import React,{Component} from 'react'
import { BrowserRouter as  Link, Router} from "react-router-dom"


// import AddTask from './AddTask'


class Menu extends Component{
  constructor(props){
    super(props);
 
  }

  


  render(){
    return(
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
        </ul>
        <hr/>

        </div>
      
     
      )
  }
}

export default Menu;