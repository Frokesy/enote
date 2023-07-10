import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavTab from './components/NavTab';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Project enote initialized!</Text>
      <NavTab />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  }
});
