 const initialState = {
    mode: 0
}

const reducer = (state = initialState, action) => {
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
    return state;
};

export default reducer;