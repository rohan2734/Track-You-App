import React,{useContext} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = () => {
  const {state,signin,clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* on will focus will be called , when anytime we are about to navigate
      on did focus will be called, when anytime we successfully complete the navigation 
      on will blur will be called, when anytime we are about to exit from the screen
      on did blur will be called, when anytime we successfully exit from the screen
      */}
      <NavigationEvents 
        onWillFocus={clearErrorMessage} 
        // onDidFocus={() => {}}
        // onWillBlur={() => {}}
        // onDidBlur={() => {}} 
      />
      <AuthForm 
        headerText="Signin to your Account" errorMessage={state.errorMessage}
        onSubmit={signin} submitButtonText="Signin"
      />
      <NavLink 
        text="Dont have an account? Signup instead" 
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
  
});

export default SigninScreen;