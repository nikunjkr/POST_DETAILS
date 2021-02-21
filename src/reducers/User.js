

const reducer = (User=[], action) => {
    switch(action.type) {
        case 'GET_USER':
            return action.payload ;
        // case 'GET_POST_COMMENTS':
        //     return action.payload;
        default:
            return User;

    }
}

export default reducer;