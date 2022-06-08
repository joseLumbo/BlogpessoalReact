import { Action } from "./actions";

export interface TokenState{
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {token: action.payload}
        }
        default:
            return state
    }

}