import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import CreateAccount from './pages/CreateAccount';


  const Stack = createNativeStackNavigator();
  
  export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chave De Roda">
        <Stack.Screen name="Chave De Roda" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Crie sua Conta" component={CreateAccount} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="Dashboard" component={HomeScreen} options={{headerBackVisible: false, headerShown: false} }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}