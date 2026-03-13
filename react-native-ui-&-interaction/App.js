import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  return (
    <>
      {/* <WelcomeScreen/> */}
      {/* <LoginScreen/> */}
      {/* <SignupScreen/> */}
      <TodoScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});