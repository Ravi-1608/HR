import React, { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

const initialState = {
  isLoggedIn: '',
  Employee_id: '',
  role: '',
  num: '1',
  currentUser: {
    name : "a",
    EmployeeId : "1",
    email : "abc",
    department : "2",
    location:'pune',
    mobileNo : '1'
    
  },

  Employees:[
    {
      name : "a",
      EmployeeId : "1",
      email : "abc",
      department : "IT",
      location:'pune',
      mobileNo : '9876543210'
    }
    
  ]
  
}




const appReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: action.payload.message,
        currentUser: {
          ...state.currentUser,
          name: action.payload.user.name,
          EmployeeId: action.payload.user.EmployeeId,
          email: action.payload.user.email,
          department: action.payload.user.department,
          location: action.payload.user.location,
          mobileNo: action.payload.user.mobileNo
        }
      };
    case 'LOGOUT':
      return { ...state, isLoggedIn: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_ROLE':
      return { ...state, role: action.payload };
    
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  // Use useReducer hook to manage state with the reducer function
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  // Use useContext hook to access the context
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Export the context provider and hook
export { AppProvider, useAppContext };