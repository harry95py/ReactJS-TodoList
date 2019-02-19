import React, { Component } from 'react';
// import Title from './Component/Title'
import './App.css'
import Controll from './Component/Controll';
import Form from './Component/Form';
import List from './Component/List';
import Title from './Component/Title'

import { filter, includes, remove, orderBy as orderByfn } from 'lodash'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


const uuid4 = require('uuid/v4');

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // items:[],
      isShowForm: false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc',
      itemSelected: null,

    }




    this.handleSort = this.handleSort.bind(this);


  }





  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })


  }
  render() {
    let itemOrigin = this.state.items;
    let items = [];
    let strSearch = this.state.strSearch;
    let { orderBy, orderDir, itemSelected } = this.state;
    //search 1     
    //     if(search.length > 0){
    //   itemOrigin.forEach((item)=>{
    //     if(item.name.toLocaleLowerCase().indexOf(search)!==-1){
    //       items.push(item);
    //   }
    //   })
    // }
    // else{
    //   items=itemOrigin;
    // }

    //search 2
    items = filter(itemOrigin, (item) => {
      return includes(item.name.toLocaleLowerCase(), strSearch)
    });
    //Sort 
    items = orderByfn(items, [orderBy], [orderDir]);

    //hien thi Form
    // if(isShowForm){
    //     eleForm=<Form
    //              itemSelected={itemSelected}
    //              onClickSubmit={this.handleSubmit} 
    //              />
    // }


    return (
      <Router>
        <div className="App">
          <Title />
          {/* TITLE : END */}

          {/* CONTROL (SEARCH + SORT + ADD) : START */}
          <Controll
            onClickSort={this.handleSort}
            orderBy={orderBy}
            orderDir={orderDir}
            onClickSearchGo={this.SearchGo}
            onClickAdd={this.handleAdd}
            isShowForm={this.state.isShowForm}
          />
          {/* CONTROL (SEARCH + SORT + ADD) : END */}
          {/* FORM : START */}
          <Form
            itemSelected={itemSelected}
            onClickSubmit={this.handleSubmit}
          />
          {/* FORM : END */}
          <List
            onClickEdit={this.handleEdit}
            onClickDelete={this.handleDelete}
          />

          {/* LIST : START */}



        </div>
      </Router>
    );
  }
}

export default App;
