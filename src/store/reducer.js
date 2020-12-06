 const initialState = {
    mode: 0,
	isAuthenticated:false,
	token:""
}

const reducer = (state = initialState, action) => {
	console.log(action.val)
	if (action.type === 'reset') {
        return {
            mode: 0
        }
    }
	if (action.type === 'mode1') {
        return {
            mode: 1
        }
    }
	if (action.type === 'mode2') {
        return {
            mode: 2
        }
    }
	
	if (action.type === 'login') {
        return {
            isAuthenticated: true
        }
    }
	
	if (action.type === 'setToken') {
        return {
            token: action.val
        }
    }
	
    return state;
};

export default reducer;