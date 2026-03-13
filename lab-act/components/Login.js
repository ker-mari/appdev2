
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>


      <View style={styles.inputContainer}>
        <TextInput/>
      </View>

      <View>
        
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    borderWidth: 1,
    borderColor: 'black',
  },
  header:{
    flex: 1,
    borderWidth: 1,
  },
  inputContainer: {
    flex: 2,
    borderWidth: 1,
  },

});