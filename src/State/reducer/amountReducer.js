const reducer = (state =0, action) => {
    /* 
        {
            message: [],
            payload: action.payload
        }
    */
    if(action.type=== 'deposite'){
        return state + action.payload
    }
    
    else if(action.type=== 'withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }
}
export default reducer ;