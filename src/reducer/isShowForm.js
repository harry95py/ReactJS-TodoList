const defaultState=false;
      const isShowForm=(state=defaultState,action)=>{
            switch(action.type){
                  case "open-form":
                        state=true;
                        return state;
                  case "close-form":
                        state=false;
                        return state;
                  case "Toggle":
                        state= !state;
                        return state;
                  default: 
                        return state;
            }

      }     


 export default isShowForm;