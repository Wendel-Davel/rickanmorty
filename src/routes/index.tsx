import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

// criando tipagem para a navegacao
const Stack = createStackNavigator();
// passando undefine pois não estou pasasdno nada entre as rotas se não deveria adicionar novas tipagens dentro da rota
type StackNavigation = {
  Home: undefined;
  Login: undefined;
  
};

//esportando as props da navegacao
export type StackTypes = StackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    
    <NavigationContainer>
    <StatusBar style='light'/>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
       <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}