import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
    list: []
}

const listReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'FETCH_RECIPES':
            return { ...state, list: action.data }
        case 'NEW_RECIPES':
            return { ...state, list: [...state.list, action.data] }
        default:
            return state
    }
}

export const store = createStore(listReducer, applyMiddleware(thunk))