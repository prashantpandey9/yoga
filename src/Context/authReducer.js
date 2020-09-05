import { UserContext } from './UserContext';

export const initialState = {
  isAuthenticated: false,
  username: null,
  token: null,
  user_id: null,
};


export  const reducer = (state, action) => {
  if (localStorage.getItem("token")===!null){
    return {
        ...state,
        isAuthenticated: true,
      };
    }
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("token", action.payload.token);
      
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        token: action.payload.token,
        user_id: action.payload.user_id
      };

    case "LOGOUT":
      localStorage.setItem("username", null);
      localStorage.setItem("token", null);

      return {
        ...state,
        isAuthenticated: false,
        username: null
      };
    default:
      return state;
  }
 
}
