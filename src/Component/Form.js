import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actCloseForm,actSubmit} from './../action/index'

class Form extends Component{

  constructor(props){
    super(props);
    this.state={
      id:'',
      task_name:'',
      level:0
      
    }

    

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
   
  
  }

  

  componentWillMount() {
    
    let item=this.props.editItem;
    
    
    if(item !== null){
      
      this.setState({
        id:item.id,
        task_name:item.name,
        level:item.level,
      })
    }


  }

  handleChange(e) {
    const value=e.target.value;
    const name=e.target.name;
    this.setState({
      [name]:value
    })
  }


  handleSubmit(e) {
    
    let item={
        id:this.state.id,
        name:this.state.task_name,
        level:this.state.level,
    }
    this.props.Submit1(item);
    e.preventDefault();
  }

  CancelForm=()=>{
    this.props.handleCanle1();
  }




  render(){
    let {isShowForm}=this.props;
    if(isShowForm===false){
        return null;
    }
   
    console.log(this.props.editItem.name);
    
    return(
      <div className="row">
          <div className="col-md-offset-7 col-md-5">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group" >
                <label className="sr-only" htmlFor="true">label</label>
                <input 
                    type="text" 
                    value={this.state.task_name}
                    className="form-control" 
                    onChange={this.handleChange} 
                 
                    name="task_name" 
                    placeholder="Task Name" 
                    ref="task_name"
                 />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="true">label</label>
                <select 
                  name="level" 
                  id="inputDs" 
                  onChange={this.handleChange} 
                  className="form-control" 
                  required="required" 
                  ref="task_level"
                  value={this.state.level}
                  >
                    <option value={0}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                </select>
              </div>
              <button type="submit"  className="btn btn-primary">Submit</button>
              <button type="button" onClick={this.CancelForm} className="btn btn-default">Cancel</button>
            </form>
          </div>
        </div>
        
    );
  }
}

const mapStatetoProps=(state)=>{
  return {
    isShowForm:state.isShowForm,
    editItem:state.editItem,
  }
}

const mapdispatchtoProps=(dispatch,ownprops)=>{
  return{
      handleCanle1:()=>{
          dispatch(actCloseForm());
      },
      Submit1:(item)=>{
        dispatch(actSubmit(item));
        dispatch(actCloseForm());
      }
  }
}

export default connect(mapStatetoProps,mapdispatchtoProps)(Form) ;