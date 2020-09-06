export let initialState = {
  isAuthenticated: false,
  username: null,
  token: null,
  user_id: null,
};
const localState = localStorage.getItem("token") || null;
console.log("localState",localState)
if (localState.length>4){
   initialState = {
      isAuthenticated: true,
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
      user_id: localStorage.getItem("user_id"),
    };
    console.log("reduces",initialState)
}
else {
  console.log("dfdfgjb",initialState)
   initialState = {
      isAuthenticated: false,
      username: null,
      token: null,
      user_id: null,
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
      localStorage.setItem("token", null);

      return {
        ...state,
        isAuthenticated: false,
        username: null,
        token: null,
        user_id: null,
      };
    case "REGISTER_SUCCESS":
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
    default:
      return state;
  }
 
}
