import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';

export default function App() {
  return (
    <PaperProvider>
      <LoginScreen/>
    </PaperProvider>
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
