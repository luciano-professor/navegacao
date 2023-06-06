import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Página Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
