let defaulSort=''
      

      
    
const submitItem=(state=defaulSort, action)=>{
    
      switch(action.type){
            case'Submit':
                  state=action.item;
                  return state;
            default:
                  return state;
      }
}
 export default submitItem;