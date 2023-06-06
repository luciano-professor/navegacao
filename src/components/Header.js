import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://images.unsplash.com/photo-1685166062150-97c0a37bfcb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
          }}
        />
      </TouchableOpacity>

      {/* Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>

      {/* Chat */}
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Ionicons name="chatbubbles" size={35} color="#FF5864" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  logo: {
    height: 56,
    width: 56,
  },
});
