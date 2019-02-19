import React,{Component} from 'react'
import Search from './Search'
import Sort from './Sort'
import Toggle from './Toggle'

// import AddTask from './AddTask'


class Controll extends Component{
  constructor(props){
    super(props);
    this.showForm=this.showForm.bind(this);
  }

  // showForm(){
  //   this.props.onClickAdd();
  // }
  showForm=()=>{
    this.props.onClickAdd();
  }


  render(){
    

    let {orderBy,orderDir,onClickSort}=this.props;
    
    return(
      <div className="row">
          {/* SEARCH : START */}
          <Search handleSearchGo={this.props.onClickSearchGo}/>
         
          {/* SORT : START */}
          <Sort
          onClickSort ={onClickSort}
          orderBy={orderBy}
          orderDir={orderDir}
          
          />
        
          {/* ADD : START */}
          <Toggle/>

        </div>
    );
  }
}

export default Controll;