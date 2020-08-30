import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';

import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';

import { Context as AuthContext} from '../context/AuthContext'; 

const SignupScreen = ({navigation}) => {
  const {state,signup} = useContext(AuthContext); 
  

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Signup for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Signup"
        //onSubmit={({email,password}) => signup({email,password})}
        onSubmit={signup}
      />
      <NavLink 
        text="Already have an account? Signin instead" 
        routeName="Signin" 
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false
  }
}


const styles = StyleSheet.create({
  container:{
    borderWidth:10,
    flex:1,
    justifyContent:'center'
  }
});

export default SignupScreen;