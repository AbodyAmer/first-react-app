import {ADD_NOTE,DELETE_NOTE, EDIT_NOTE  } from '../action'
import {bake_cookie, read_cookie} from 'sfcookies'

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
    state = read_cookie('notes')
    switch(action.type){
        case ADD_NOTE: 
        notes = [ addNote(action), ...state]
        bake_cookie('notes' , notes)
        return notes
        case DELETE_NOTE:
        notes = removeNote(state, action.id)
        bake_cookie('notes' , notes)
        return notes
        case EDIT_NOTE:
        notes = editNote(state, action)
        bake_cookie('notes' , notes)
        return notes
        default:
        return state
    }
}
export default notes