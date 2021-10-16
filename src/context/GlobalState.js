import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'; 

// Initial state
const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 }, // expense: negative number, income: positive number
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); //appReducer allows more complicated manipulation of variables

    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}