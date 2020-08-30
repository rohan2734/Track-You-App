import {AsyncStorage} from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state,action) => {
  switch (action.type){
    case 'signup':
      return {token:action.payload,errorMessage:''};
    case 'add_error':
      return {...state,errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => async ({email,password}) => {
    try{
      const response = await trackerApi.post('/signup',{email,password});
      await AsyncStorage.setItem('token',response.data.token);
      dispatch({type:'singup',payload: response.data.token})
      
      navigate('TrackList');
    }catch(err){
      dispatch({type:'add_error',payload:'Something went wrong with signup'})
    }
};


const signin = dispatch => {
  return ({email,password}) => {
    //try to signin
    //Handle success by updating state
    //Handle failure by showing error message (somehow)

  };
};

const signout = dispatch => {
  return () => {
    //signout
  }
}

export const {Provider,Context} = createDataContext(
  authReducer,
  {signin,signout,signup},
  {token:null,errorMessage:''}
);