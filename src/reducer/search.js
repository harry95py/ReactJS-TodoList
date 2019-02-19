const defaultState='';

const search=(state=defaultState,action)=>{
     switch(action.type){
          case "Search":
               state=action.strSearch
               return state;
          default:
               return state;
     }
}
 export default search;