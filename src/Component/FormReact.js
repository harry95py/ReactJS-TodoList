import React,{Component} from 'react'

class FormReact extends Component{
 
    constructor(props){
      super(props)
      this.state = {
        name: '',
        phone:'',
        country:'',
      };
    

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
      const name=e.target.name;
      const value=e.target.value
      this.setState({
        [name]:value
      })
    }

    handleSubmit(e){
      // alert(
      // 'Name: ' +this.state.Name+ 
      // '\n' +'Phone: '+this.state.phone+ 
      // '\n' +'Country: '+this.state.country);
      console.log(this.state);
      e.preventDefault();
    }


  render(){
    return(
     

      <div className="row">
        <h2>Horizontal Form</h2>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label className="control-label col-xs-2" >Name</label>
                  <div className="col-xs-10">
                  <input             
                  value={this.state.name} 
                  name="name" 
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange} 
                  style={{width:300}} 
                  placeholder="Phone Number" 
                  />
                  </div>
              </div>

              <div className="form-group">
                  <label className="control-label col-xs-2">Phone Number</label>
                  <div className="col-xs-10">
                  <input 
                    value={this.state.phone} 
                    name="phone" 
                    type="text" 
                    className="form-control" 
                    onChange={this.handleChange} 
                    style={{width:300}} 
                    placeholder="Phone Number" 
                  />
                  </div>   
              </div>

              <div className="form-group">
                  <label  className="control-label col-xs-2">Country</label>
                  <div className="col-xs-10">
                  <select style={{width:300}} name="country"  className="form-control" onChange={this.handleChange}>
                  <option value={this.state.country}></option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value='America '>America</option>
                  <option value='France'>France</option>
                  </select>
                  </div>
              </div>
        

          
      
          
              <div className="form-group" >
                <div className="col-xs-offset-2 col-xs-10">    
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </div>

               

          </form>


         <div className="form-check-inline">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" defaultValue />Option 1
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" defaultValue />Option 2
          </label>
        </div>
        <div className="form-check-inline disabled">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" defaultValue disabled />Option 3
          </label>
        </div>    
      </div>



  
         
    );
  }
}

export default FormReact;