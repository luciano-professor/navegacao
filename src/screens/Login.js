import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
  function navegarParaHome() {
    //Comando de navegar para outra Screen
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagem}
        source={require('../../assets/tinder.png')}
      />

      <TouchableOpacity onPress={navegarParaHome} style={styles.botaoLogin}>
        <Text style={styles.textoBotaoLogin}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botaoLogin: {
    position: 'absolute',
    bottom: 160,
    backgroundColor: 'white',
    padding: 16,
    width: 100,
    alignSelf: 'center',
    borderRadius: 20,
  },
  textoBotaoLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagem: {
    flex: 1,
  },
});
