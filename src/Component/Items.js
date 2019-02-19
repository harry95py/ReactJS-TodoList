import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actOpenForm,actDelete,actEdit} from './../action/index'



class Items extends Component{



  clickDelete = (id) => () => {
    this.props.hanldeDelete(id);
  }

  clickEdit=(item)=>()=>{
      this.props.handleEdit(item);
  }

  render(){
   

    const {index}=this.props;
    const {item}=this.props;
    let eleLevel=null;
    if(item.level===0){
        eleLevel=<span className="label label-danger">Small</span>
    }
    else if(item.level===1){
        eleLevel=<span className="label label-info">Medium</span>
    }
    else{
      eleLevel= <span className="label label-default">High</span>
    }
    return(
      <tr>
      <td className="text-center">{index+1}</td>
      <td>{item.name}</td>
      <td className="text-center">{eleLevel}</td>
      <td>
        <button type="button" onClick={this.clickEdit(item)} className="btn btn-warning">Edit</button>
        <button type="button" onClick={this.clickDelete(item.id)} className="btn btn-danger">Delete</button>
      </td>
    </tr>
    );
  }
}

const mapStatetoProps=(state)=>{
    return{
      id:state.deleteItems,
      
    }
}

const mapDispatchtoProps=(dispatch,ownProps)=>{
  
  return {
    handleEdit:(item)=>{
          dispatch(actEdit(item))
          dispatch(actOpenForm());

      },
      hanldeDelete:(id)=>{
        dispatch(actDelete(id));
      },
     

  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Items) ;