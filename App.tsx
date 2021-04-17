import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
} from 'react-native';
import MyButton from './components/Mybutton';
import {MyButton2} from './components/Mybutton';
import TextField from './components/Textfield';

const App = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errorUser, setErrorUsername] = useState<string>();
  const [errorPassword, setErrorPassWord] = useState<string>();

  useEffect(() => {
    console.log(`username is -${username}`);
    console.log(`password is -${password}`);
  }, [username, password]);

  useEffect(() => {
    Alert.alert('xin chao ban den voi yolo system');
  }, []);

  const validateUserName = useCallback(() => {
    if (username?.length <= 0 || !username) {
      setErrorUsername('please input user name');
    } else {
      setErrorUsername(undefined);
    }
  }, [username]);

  const validatePassWord = useCallback(() => {
    if (password?.length <= 0 || !password) {
      setErrorPassWord('Please input your password');
    } else {
      setErrorPassWord(undefined);
    }
  }, [password]);

  const loginClick = useCallback(() => {
    Alert.alert(`xin chao ban ${username}  da dang nhap thanh cong`);
  }, [username, password]);

  return (
    <SafeAreaView>
      <View style={styles.basicLogin}>
        <Text style={styles.text}>Yolo system</Text>
        <TextField
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          style={[styles.username, styles.textInput]}
          placeholderTextColor="grey"
          secureTextEntry
          error={errorUser}
          onBlur={validateUserName}
        />

        <TextField
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          style={[styles.textInput, styles.password]}
          placeholderTextColor="grey"
          secureTextEntry
          error={errorPassword}
          onBlur={validatePassWord}
        />
        <MyButton
          style={{...styles.button, ...styles.Login}}
          buttonText="Login"
          onPress={loginClick}
        />
        {/* //cach xai ... */}
        {/* <MyButton
          style={{...styles.button, ...styles.facebook}}
          buttonText="FaceBook"
          onPress={hello}
        /> */}
        {/* //cach xai array */}
        {/* <MyButton2 style={[styles.button, styles.google]} buttonText="Google" /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  basicLogin: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingVertical: 10,
  },

  system: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'red',
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'green',
  },
  Login: {
    backgroundColor: 'purple',
  },

  textInput: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
    marginHorizontal: 10,

    marginBottom: 10,
  },
  username: {
    marginTop: 10,
  },
  password: {
    marginTop: 10,
  },
});

export default App;
