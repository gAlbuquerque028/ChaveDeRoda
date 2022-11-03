import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import CreateAccount from './pages/CreateAccount';


  const Stack = createNativeStackNavigator();
  
  export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Chave De Roda" component={LoginScreen} />
        <Stack.Screen name="Crie sua Conta" component={CreateAccount} />
        <Stack.Screen name="Dashboard" component={HomeScreen} options={{headerBackVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}