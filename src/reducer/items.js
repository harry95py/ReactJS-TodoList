


import { remove} from 'lodash'
const uuid4= require('uuid/v4');
let defaultState=[];
  defaultState=JSON.parse(localStorage.getItem('task'));

      const items=(state=defaultState,action)=>{
                switch(action.type){
                 case 'Delete':
                        
                       
                        remove(state, function(v) {
                          console.log(v.id=action.id);
                          console.log(action.id);

                          return v.id=action.id;
                        });

                        localStorage.setItem('task',JSON.stringify(state));
                        
                        return [...state];

                  case 'Submit':

                     
                            
               
                 
                    
                  
                    state.push({
                      id:uuid4(),
                      name:action.item.name,
                      level:+action.item.level,
                    });
                   
                    localStorage.setItem("task",JSON.stringify(state));
                        return [...state];
                 default:
                  return state

           }
      }     


 export default items;