export const initialState = {
    user: {
        displayName: "Abey Thomas",
        email: "abeycodes@gmail.com",
        photoURL: "https://lh5.googleusercontent.com/-7o7wsKep4qg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxJphZJ-TnF-RCNDqSKjmHQQPzJw/photo.jpg",
    },
};

export const actionTypes = {
    SET_USER : "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER : 
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default reducer;