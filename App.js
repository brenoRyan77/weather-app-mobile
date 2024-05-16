import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import WeatherApp from './src/components/WeatherApp';

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
