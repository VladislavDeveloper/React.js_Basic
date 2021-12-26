import firebase from "firebase";

import { AUTH_REQUEST, AUTH_REQUEST_SUCCESSFUL, CHANGE_USER_NAME } from "./constants";

export const changeUserName = (payload) => ({
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

export const initUserNameWithThunk = () => async (dispatch) => {
  await firebase.auth().onAuthStateChanged((auth) => {
    if(auth){
      const id = firebase.auth().currentUser.uid;
      firebase.database().ref("profile").child(id).child("userName").on("value", (snapshot) => {
        dispatch(changeUserName(snapshot.val()))
      })
    }
  })
}