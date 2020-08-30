import React,{useState,useContext} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input,Button} from 'react-native-elements'
import Spacer from '../components/Spacer';

import { Context as AuthContext} from '../context/AuthContext'; 

const SignupScreen = ({navigation}) => {
  const {state,signup} = useContext(AuthContext); 
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
        <Input 
          label="Email" 
          value={email} 
          onChangeText={ setEmail}
          autoCapitalize="none"
          autoCorrect={false} 
        />
        {/* or we can use onChangeText={(newEmail) =>setEmail(newEmail) } */}
      <Spacer />
        <Input
          secureTextEntry
          label="password" 
          value={password} 
          onChangeText={setPassword} 
          autoCapitalize="none"
          autoCorrect={false}   
        />
      <Spacer/>
      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button 
          title="Sign Up"
          onPress={() => signup({email,password})}  
        ></Button>
      </Spacer>
      <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
        <Spacer>
        <Text style={styles.link}>Already have an account?Signin instead</Text>
        </Spacer>
      </TouchableOpacity>
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
  },
  errorMessage:{
    fontSize:16,
    color:'red',
    marginLeft:15,
    marginTop:-10
  },
  link:{
    color:'blue'
  }
});

export default SignupScreen;