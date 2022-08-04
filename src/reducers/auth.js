import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/";



export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {}
  },
  action
) => {
  switch (action.type) {

    /* When a user is trying to login we want to let our app know that yes, they are logging in and we also want to clear any errors that may have previously occurred:*/
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false
      };

    /*When a successful login occurs, we want to tell our app that it is no longer trying to log a user in, that a user is now authenticated, and we want to store that user that our action passes: */
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user
      };
    /* when a login failure occurs, we want to tell our app that it is also no longer trying to log a user in, that no user is authenticated, and that a failure has occurred:*/
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
};