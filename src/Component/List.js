import React,{Component} from 'react'
import Items from './Items'
import { connect } from 'react-redux'
import {filter,includes} from 'lodash'

class List extends Component{

  constructor(props){
    super(props);
    this.state={
        
    }    
    // console.log(this.props.search);
 
  }

  render(){
      //   /*mang truyen tu app qua List*/
  

 
      let {items, onClickDelete,onClickEdit}=this.props;
      
      let strSearch=this.props.search;
      let itemsOriginal=items!==null ? items : []
    
          items=  filter(itemsOriginal,(item)=>{      
                return includes(item.name.toLocaleLowerCase(),strSearch)
          }); 
       

      
 

      let elementItem = items.map((item,index)=> {
        return(
          <Items onClickEdit={onClickEdit}  onClickDelete={onClickDelete} key={index} item={item} index={index}/>
      )});
    return(
      <div className="panel panel-success">
          <div className="panel-heading">List Task</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th>Task</th>
                <th style={{width: '20%'}} className="text-center">Level</th>
                <th style={{width: '20%'}}>Action</th>
              </tr>
            </thead>
            <tbody>
                {elementItem}
            </tbody>
          </table>
        </div>
    );
  }
}

const mapStatetoProps=(state)=>{
  return {
    items:state.items,
    search:state.search
  }
}

export default connect(mapStatetoProps,null)(List) ;