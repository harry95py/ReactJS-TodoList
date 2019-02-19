import React,{Component} from 'react'
import {connect} from 'react-redux';
import {actSearch} from './../action/index'

class Search extends Component{

  constructor(props){
    super(props);
    this.state={
      search:''
    }
    this.handleSearch=this.handleSearch.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleClear=this.handleClear.bind(this);
    // console.log(this.props.search);
  }

  //goi searchGo, lay gia tri search tu input, setstate search trong store
  handleSearch(){
    this.props.searchGo(this.state.search);
    
  }

  //lay gia tri input, setstate search
  handleChange(event) {
    this.setState({search : event.target.value});
  }

   handleClear(){
    this.setState({
      search:""
    })
     this.props.searchClear(this.state.search);
   }


  render(){
    let strSearch=this.state.search!== '' ? this.state.search:this.props.search;
    return(
         
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
              <input type="text" value={strSearch} onChange={this.handleChange} className="form-control" onClick={this.handleSearch} placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-info" type="button" onClick={this.handleSearch}>Search!</button>
                <button className="btn btn-warn" type="button" onClick={this.handleClear}>Clear!</button>
              </span>
            </div>
          </div>
         
    );
  }
}

const mapstatetoprops=(state)=>{
    return{
        search:state.search
    }
} 

const mapdispatchtoProps=(dispatch,ownprops)=>{
  return{
      searchGo:(strsearch)=>{
          dispatch(actSearch(strsearch));
      },
      searchClear:(strsearch)=>{
        dispatch(actSearch(strsearch));
      }
  }
}

export default connect(mapstatetoprops,mapdispatchtoProps)(Search) ;