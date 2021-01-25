 const initialState = {
    mode: 0,
	isAuthenticated:false,
    token:"",
    email:""
}

const reducer = (state = initialState, action) => {
	if (action.type === 'reset') {
        return {
			...state,
            mode: 0
        }
    }
    
	if (action.type === 'mode1') {
        return {
			...state,
            mode: 1
        }
    }
	if (action.type === 'mode2') {
        return {
			...state,
            mode: 2
        }
    }
	
	if (action.type === 'login') {
        return {
			...state,
            isAuthenticated: true
        }
    }
	
	if (action.type === 'setToken') {
        return {
			...state,
            token: action.val
        }
    }
    if (action.type === 'setEmail') {
        return {
			...state,
            email: action.val
        }
    }
	if (action.type === 'logout') {
        return {
			...state,
            token: "",
			isAuthenticated: false
        }
    }
	
    return state;
};

export default reducer;