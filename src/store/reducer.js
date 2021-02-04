var emptySolve = new Array(100);
emptySolve.fill(false); 

const initialState = {
    mode: 0,
	isAuthenticated:false,
    token:"",
    user:{solved:emptySolve}
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

	if (action.type === 'logout') {
        return {
			...state,
            token: "",
			isAuthenticated: false
        }
    }

    if (action.type === 'user') {
        return {
			...state,
            user: {...action.val}
        }
    }

    if (action.type === 'emptyUser') {
        let A = new Array(100);
        A.fill(false); 
        return {
			...state,
            user: {solved:A}
        }
    }
	
    return state;
};

export default reducer;