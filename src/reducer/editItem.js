const defaultState={
     id:'',
     name:'',
     level:0,
}

const editItem=(state=defaultState,action)=>{
     switch(action.type){
          case "selectedItem":
               
               state=action.item;
               return state;
          default:
               return state;
     }
}
 export default editItem;