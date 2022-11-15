import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';
import CreateAccount from './src/pages/CreateAccount';
import CategoryScreen from './src/pages/CategoryScreen';
import ServiceScreen from './src/pages/ServiceScreen';
import CaminhaoCategory from './src/pages/caminhao/ServiceCaminhao'
import { AlinhamentoCaminhao } from './src/pages/caminhao/AlinhamentoCaminhao';
import { BalanceamentoCaminhao } from './src/pages/caminhao/BalanceamentoCaminhao';
import { RevisaoCaminhao } from './src/pages/caminhao/RevisaoCaminhao';
import { TrocaOleoCaminhao } from './src/pages/caminhao/TrocaOleoCaminhao';
import CarroCategory from './src/pages/carro/ServiceCarro'
import { AlinhamentoCarro } from './src/pages/carro/AlinhamentoCarro'
import { BalanceamentoCarro } from './src/pages/carro/BalanceamentoCarro'
import { RevisaoCarro } from './src/pages/carro/RevisaoCarro'
import { TrocaOleoCarro } from './src/pages/carro/TrocaOleoCarro'
import MotoCategory from './src/pages/moto/ServiceMoto'
import { AlinhamentoMoto } from './src/pages/moto/AlinhamentoMoto'
import { BalanceamentoMoto } from './src/pages/moto/BalanceamentoMoto'
import { RevisaoMoto } from './src/pages/moto/RevisaoMoto'
import { TrocaOleoMoto } from './src/pages/moto/TrocaOleoMoto'
import VanCategory from './src/pages/van/ServiceVan'
import { AlinhamentoVan } from './src/pages/van/AlinhamentoVan'
import { BalanceamentoVan } from './src/pages/van/BalanceamentoVan'
import { RevisaoVan } from './src/pages/van/RevisaoVan'
import { TrocaOleoVan } from './src/pages/van/TrocaOleoVan'

  const Stack = createNativeStackNavigator();
  
  export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chave De Roda">
        <Stack.Screen name="Chave De Roda" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Crie sua Conta" component={CreateAccount} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="Dashboard" component={HomeScreen} options={{headerBackVisible: false, headerShown: false} }/>
        <Stack.Screen name="Categoria" component={CategoryScreen} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="Servicos" component={ServiceScreen} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="ServiceCaminhao" component={CaminhaoCategory} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="AlinhamentoCaminhao" component={AlinhamentoCaminhao} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="BalanceamentoCaminhao" component={BalanceamentoCaminhao} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="RevisaoCaminhao" component={RevisaoCaminhao} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="TrocaOleoCaminhao" component={TrocaOleoCaminhao} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="ServiceCarro" component={CarroCategory} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="AlinhamentoCarro" component={AlinhamentoCarro} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="BalanceamentoCarro" component={BalanceamentoCarro} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="RevisaoCarro" component={RevisaoCarro} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="TrocaOleoCarro" component={TrocaOleoCarro} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="ServiceMoto" component={MotoCategory} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="AlinhamentoMoto" component={AlinhamentoMoto} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="BalanceamentoMoto" component={BalanceamentoMoto} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="RevisaoMoto" component={RevisaoMoto} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="TrocaOleoMoto" component={TrocaOleoMoto} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="ServiceVan" component={VanCategory} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="AlinhamentoVan" component={AlinhamentoVan} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="BalanceamentoVan" component={BalanceamentoVan} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="RevisaoVan" component={RevisaoVan} options={{headerTransparent: true, headerTitle: ''}}/>
        <Stack.Screen name="TrocaOleoVan" component={TrocaOleoVan} options={{headerTransparent: true, headerTitle: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}