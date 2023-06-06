import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavegacaoStack from './src/NavegacaoStack';
import NavegacaoDrawer from './src/NavegacaoDrawer';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* O arquivo de configuracao das rotas está separado */}
        {/* <NavegacaoStack /> */}

        <NavegacaoDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
