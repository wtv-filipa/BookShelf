import { myFirebase, db } from "../firebase/firebase";

//LOG IN
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

//LOG OUT
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

//VERIFY
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";


//REQUESTING: functions that return our action types and the necessary parameters that our reducer will read.

//REQUESTING LOG IN
const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

//successful login that takes in a firebase user object:

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

//FAILURE:
const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

///////////////////////////////////////////////////////
//LOG OUT

//REQUESTING LOG OUT
const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

//successful logout that takes in a firebase user object:

const receiveLogout = user => {
  return {
    type: LOGOUT_SUCCESS,
    user
  };
};

//FAILURE:
const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

///////////////////////////////////////////////////////
const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
}

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
}

//////////////////////////////////////////////////

//LoginUser thunk:

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebase.auth().signInWithEmailAndPassword(email, password).then(user => {
    dispatch(receiveLogin(user));
  }).catch(error => {
    //Do something with the error if you want!
    dispatch(loginError());
  });
};

/*First, we dispatch requestLogin() which will tell our app a user is logging in. Then, we get our firebase auth instance by calling myFirebase.auth().
Then we call the authentication method we want to use which in this case is signInWithEmailAndPassword() and we pass in our user credentials. After, we use a then() that will be passed the firebase user object when login is successful to dispatch receiveLogin(user).We pass the user because want to store the firebase user object in redux so we can use it later in our app. We won’t be using it in this tutorial, but you’ll thank me when you start trying to interact with your Firestore database in future actions you’re going to write! 
And finally, we catch any errors that occur and dispatch loginError() so we can let our users know that something went wrong.*/

///////////////////////////////////////////////////

//LogoutUser thunk:

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebase.auth().signOut().then(() => {
    dispatch(receiveLogout());
  }).catch(error => {
    //Do something with the error if you want!
    dispatch(logoutError());
  });
};

/////////////////////////////////////////////////
//Verify Thunk

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};

//SIGN UP AKA REGISTAR
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {

      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}
