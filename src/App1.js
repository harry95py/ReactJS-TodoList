import React,{Component} from 'react'
import Menu from './Component/Menu'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './Component/Home'
import About from './Component/About'
import Course from './Component/Course'

// import AddTask from './AddTask'


class App1 extends Component{
  constructor(props){
    super(props);
 
  }

  


  render(){
    return(
      <Router>
        <div className="app1">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
        </ul>
        <hr/>

          <div class="panel-group">
                <div class="panel panel-default">
                     <div class="panel-body">Content</div>
                </div>
                <div class="panel panel-default">
                      <div class="panel-body">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/course" component={Course} />
                       
                      </div>
              </div>
          </div>
        </div>
      </Router>
      )
  }
}

export default App1;