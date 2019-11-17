import { INCREMENT,GET_MORE } from '../actions/actionType'
const initState = {
    movie:null,
    more_movies:null
}
const movieReducer = (state = initState,action) => {
    const newState = {
        ...state
    }
    switch ( action.type ){
        case INCREMENT :
                newState.movie = action.payload
                //  console.log('11', newState.movie)
                
            break;
        case GET_MORE:
            newState.more_movies = action.payload
            console.log('more', newState.movie)
        default:
            break;
    }
    return newState
}

export default movieReducer