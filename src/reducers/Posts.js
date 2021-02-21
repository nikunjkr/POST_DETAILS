// reducer is function which accepts a state and an action

const reducer = (Posts=[], action) => {
    switch(action.type) {
        case 'ADD_POST':
            return [...Posts, action.payload];
        case 'FETCH_ALL':
            return action.payload ;
        // case 'GET_POST_COMMENTS':
        //     return action.payload;
        default:
            return Posts;

    }
}

export default reducer;