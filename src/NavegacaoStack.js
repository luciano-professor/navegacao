import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Chat from './screens/Chat';

const Stack = createNativeStackNavigator();
const NavegacaoStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Aqui dentro nós vamos configurar as páginas da minha aplicação */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default NavegacaoStack;
