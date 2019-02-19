import { createStore } from 'redux'
import  appReducer  from './reducer/index'
import {actDelete} from './action/index'







const store=createStore(appReducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());














// store.dispatch(actDelete("a1"));
// console.log("get delete ID:",store.getState().deleteItems)

// console.log("Inite state:",store.getState()); //true

// store.dispatch(actCloseForm());
// console.log("Close-form:",store.getState())  //false

// store.dispatch(actOpenForm())
// console.log('open-Form: ',store.getState()) //true

// store.dispatch(actSearch("Hello"))
// console.log('Earch: ',store.getState()) 


// store.dispatch(actTogle());
// console.log('toggle-form ',store.getState());

// store.dispatch(actSort("Level","desc"));
// console.log('sort: ',store.getState());

// // store.dispatch(openForm());
// // console.log("Open-form:",store.getState());   //false

// // store.dispatch(toggleForm());
// // console.log("Toggle-form:",store.getState());  //true

// // store.dispatch(actSort('level','desc'));
// // console.log("Sort:",store.getState()); //



// // store.dispatch(actSearch('Harry Lee'));
// // console.log("Search:",store.getState()); 

export default store;