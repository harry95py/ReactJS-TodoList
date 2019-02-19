

export const actCloseForm=()=>{
      return{
        type:'close-form'
      }
}

export const actOpenForm=()=>{
    return{
      type:'open-form',
    }
}

export const actSearch =(strSearch)=>{
    return{
      type:"Search",
      strSearch
    }
}

export const actDelete =(id)=>{
  return{
    type:"Delete",
    id
  }
}

export const actSort=(orderBy,orderDir)=>{
    return{
      type:"sort",
      orderBy,
      orderDir
      
    }
}

export const actTogle=()=>{
  return{
    type:"Toggle",
  }
}

export const actSubmit=(item)=>{
  return{
    type:"Submit",
    item,
  }
}

export const actEdit=(item)=>{
  return{
    type:"selectedItem",
    item,
  }
}


























// export const closeForm=()=>{
//   return {
//       type:'CLOSE_FORM'
//   }
// }

// export const openForm=()=>{
//   return {
//       type:'OPEN_FORM'
//   }
// }



// export const actSort=(orderBy,orderDir)=>{
//   return {
//       type:'SORT',
//       orderBy,
//       orderDir
//   }
// }


// export const toggleForm=()=>{
//   return {
//       type:'TOGGLE_FORM',
//   }
// }


// export const actSearch=(strSearch)=>{
//   return {
//       type:'SEARCH',
//       strSearch
//   }
// }