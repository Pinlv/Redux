import redux from "redux"
const INIT_COMMENTS="INIT_COMMENTS"
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export default function(state, action){
    if(!state){
        state={comment:[]}
    }

}