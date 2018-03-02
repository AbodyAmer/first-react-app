import {ADD_NOTE,DELETE_NOTE, EDIT_NOTE  } from '../action'

const addNote = (action) =>{

    let {title, bodytext} = action 
    return{
        id : Math.random(), 
        title, 
        bodytext
    }
}

const removeNote = (state= [], id)=>{

    const Notes = state.filter(note => note.id !== id)
    return Notes
}

const editNote = (state=[], action)=>{
    let {id, title, bodytext} = action
    
    let Notes = state.map(note =>{
        let newnote= note
     if(note.id === id){
         
         newnote.title = title, 
         
         newnote.bodytext = bodytext
     }
     return newnote
    })
  
    return Notes
}

const notes = (state=[] , action) => {

    let notes = null
    switch(action.type){
        case ADD_NOTE: 
        notes = [ addNote(action), ...state]
        return notes
        case DELETE_NOTE:
        notes = removeNote(state, action.id)
        return notes
        case EDIT_NOTE:
        notes = editNote(state, action)
        return notes
        default:
        return state
    }
}
export default notes