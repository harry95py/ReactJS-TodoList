let defaulSort={
      orderBy:'name',
      orderDir:'asc'
}
const sort=(state=defaulSort, action)=>{
      let {orderBy}=action;
      let {orderDir}=action;
      switch(action.type){
            case'sort':         
                  return {orderBy,orderDir}
            default:
                  return state;
      }
}
 export default sort;