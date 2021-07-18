export type StateType = {
    loginReducer : LoginReducerType[];
    getDataReducer : GetDataReducerType[];
    registerReducer : RegisterReducerType[];
    cartReducer : CartReducerType[];
};

export type LoginReducerType = {
    mail : String;
    pass : String;
}

export type GetDataReducerType = {
    id: number;
    name : String;
    description : String;
    category : String;
    price : String;
}

export type RegisterReducerType = {
    mail : String;
    pass : String;
    pass2 : string;
}

export type CartReducerType = {
    id: number;
    name : String;
    description : String;
    category : String;
    price : String;
    count : number;
}