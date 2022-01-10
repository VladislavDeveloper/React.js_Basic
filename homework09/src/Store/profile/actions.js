import firebase from "firebase";

import { AUTH_REQUEST, AUTH_REQUEST_SUCCESSFUL, CHANGE_USER_NAME } from "./constants";

export const changeUserNameAction = (payload) => ({
  type: CHANGE_USER_NAME,
  payload,
})

export const newAuthRequest = () => ({
  type: AUTH_REQUEST
});

export const authRequestSuccessful = (auth) => ({
  type: AUTH_REQUEST_SUCCESSFUL,
  payload:auth
});

export const checkAuthStatusWithThunk = () => async (dispatch, getState) => {
  dispatch(newAuthRequest())
    await firebase.auth().onAuthStateChanged((auth) => {
      dispatch(authRequestSuccessful(auth));
    })  
}

export const changeUserName = (value) => async() => {
  const db = firebase.database();
  const id = firebase.auth().currentUser.uid;
  db.ref("profile").child(id).child("userName").set(value);
}

export const initUserNameWithThunk = () => async (dispatch) => {
  await firebase.auth().onAuthStateChanged((auth) => {
    if(auth){
      const id = firebase.auth().currentUser.uid;
      firebase.database().ref("profile").child(id).child("userName").on("value", (snapshot) => {
        dispatch(changeUserNameAction(snapshot.val()))
      })
    }
  })
}