import React,{Component} from 'react'
import { BrowserRouter as  Link} from "react-router-dom"


// import AddTask from './AddTask'


class Course extends Component{
  constructor(props){
    super(props);
 
  }

  


  render(){
    return(
      <div>
          <h3>Course</h3>
          <ul class="list-group">
             
              <li class="list-group-item">
                <Link to="course/angular">Angular</Link>
              </li>
              <li>
                <Link to="course/about">React JS</Link>
              </li>
          </ul>
     
      </div>
      )
  }
}

export default Course;