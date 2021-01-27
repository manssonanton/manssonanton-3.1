import { ThunkAction } from 'redux-thunk';

import { SignUpData, AuthAction, SET_ERROR, SET_USER, SET_SUCCESS, SIGN_OUT, SET_LOADING, NEED_VERIFICATION, SignInData, User } from '../Types/authTypes';
import { RootState } from '..'
import firebase from '../../Firebase/config'

// Create user

export const signUp = (data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
            if (res.user) {
                const userData: User = {
                    email: data.email,
                    name: data.name,
                    id: res.user.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }
                await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
                await res.user.sendEmailVerification();
                dispatch({
                    type: NEED_VERIFICATION
                });
                dispatch({
                    type: SET_USER,
                    payload: userData
                });
            }
        } catch (error) {
            onError();
            dispatch(setError(error.message));
        }
    }
}

// Get user by id
export const getUserById = (id: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const user = await firebase.firestore().collection('users').doc(id).get();

            if (user.exists) {
                const userData = user.data() as User;
                dispatch({
                    type: SET_USER,
                    payload: userData
                });
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
}

// setLoading
export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: value
        });
    }
}

// log in
export const signIn = (data: SignInData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        } catch (error) {
            onError();
            dispatch(setError(error.message));
        }
    }
}

// log in with google
export const signUpWithGoogle = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await firebase.auth().signInWithPopup(provider);
            if (res.user) {
                const userData: User = {
                    email: res.user.email as any,
                    name: res.user.displayName as any,
                    id: res.user.uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }
                await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
                await res.user.sendEmailVerification();
                dispatch({
                    type: NEED_VERIFICATION
                });
                dispatch({
                    type: SET_USER,
                    payload: userData
                });
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
}

// log in with google
export const signInWithGoogle = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await firebase.auth().signInWithPopup(provider);
            if (res.user) {
                getUserById(res.user.uid);
            }
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
}

// log out
export const signOut = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            await firebase.auth().signOut();
            dispatch({
                type: SIGN_OUT,
            });
        } catch (error) {
            console.log(error.message);
            dispatch(setLoading(false));
        }
    }
}

// Set error
export const setError = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload: msg
        });
    }
}

// Set setNeedVerification
export const setNeedVerification = (): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: NEED_VERIFICATION,
        });
    }
}

// Set setSuccess
export const setSuccess = (msg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUCCESS,
            payload: msg
        });
    }
}

// send password reset mail
export const sendPassWordResetEmail = (email: string, successMsg: string): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            dispatch(setSuccess(successMsg));
        } catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));
        }
    }
}