import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actTogle} from './../action/index';
// import AddTask from './AddTask'


class Toggle extends Component{


  // showForm(){
  //   this.props.onClickAdd();
  // }
  showForm=()=>{
    this.props.handleToggle();
  }


  render(){
    
    let nametask='open form';
    let nameclass='btn-info '
    const {isShowForm}=this.props;
    
    if(isShowForm){
      nametask='close form';
      nameclass='btn-success'
    }

   
    
    return(
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <button type="button" onClick={this.showForm}  className={`btn ${nameclass} btn-block`} >{nametask}</button>
          </div>        
    );
  }
}

const mapStatetoProps=(state)=>{
    return{
      isShowForm:state.isShowForm
    }
}
const mapdispatchtoProps=(dispatch,ownprops)=>{
  return{
      handleToggle:()=>{
          dispatch(actTogle());
      }
  }
}

export default connect(mapStatetoProps,mapdispatchtoProps)(Toggle) ;