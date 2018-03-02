export const ADD_NOTE = 'ADDNOTE'
export const DELETE_NOTE = 'DELETENODE'
export const EDIT_NOTE = 'EDITNOTE'

export const addnote = (title, bodytext) => {

    console.log("Hi from addnote action")
    const action = {
        type:ADD_NOTE, 
        title, 
        bodytext
    }
    return action
}

export const deletenote = id => {
    const action ={
        type:DELETE_NOTE, 
        id
    }
    return action
}

export const editnote = (id, title, bodytext) => {
    console.log('action')
    const action ={
        type: EDIT_NOTE, 
        id, 
        title, 
        bodytext
    }
    return action 
}