export let initialState = {
  isAuthenticated: false,
  username: null,
  token: null,
  user_id: null,
};
const localState = localStorage.getItem("token");
console.log("localState",localState)
if (localState===null){
  initialState = {
      isAuthenticated: false,
      username: null,
      token: null,
      user_id: null,
    };
   
}
else {
  initialState = {
      isAuthenticated: true,
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
      user_id: localStorage.getItem("user_id"),
    };
   
}
export  const reducer = (state, action) => {
  

  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user_id", action.payload.user_id);
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        token: action.payload.token,
        user_id: action.payload.user_id
      };

    case "LOGOUT":
      localStorage.clear()
      // localStorage.setItem("token", null);

      return {
        ...state,
        isAuthenticated: false,
        username: null,
        token: null,
        user_id: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        username: localStorage.getItem("username"),
        token: localStorage.getItem("token"),
        user_id: localStorage.getItem("user_id"),

      };
    default:
      return state;
  }
 
}
