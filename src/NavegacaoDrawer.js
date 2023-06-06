import { createDrawerNavigator } from '@react-navigation/drawer';

//Importando as Screens
import Login from './screens/Login';
import Home from './screens/Home';
import Chat from './screens/Chat';

const Drawer = createDrawerNavigator();

const NavegacaoDrawer = () => {
  return (
    <Drawer.Navigator
      backBehavior="history"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
};

export default NavegacaoDrawer;
