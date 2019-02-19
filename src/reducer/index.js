
import isShowForm from './isShowForm'
import search from './search'
import sort from './sort'
import items from './items'
import editItem from './editItem'
import submitItem from './submitItem'
import { combineReducers } from 'redux'

const appReducer=combineReducers({
     isShowForm,
     search,
     sort,
     items,
     editItem,
     submitItem,
})
     




 

   

 export default appReducer;