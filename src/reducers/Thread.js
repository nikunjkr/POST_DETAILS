const reducer = (Thread=[], action) => {
    switch(action.type) {
        
        case 'GET_THREAD':
            return action.payload;

        case 'REPLY_COMMENT':
            return Thread;
        default:
            return Thread;

    }
}

export default reducer;