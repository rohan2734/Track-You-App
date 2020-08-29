import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button} from 'react-native-elements'
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
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
      <Spacer>
        <Button title="Sign Up"></Button>
      </Spacer>
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