import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './telas/principal/Principal';
import Login from './telas/login/Login';
import Ponto from './telas/ponto/ponto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='principal' component={Principal} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='ponto' component={Ponto} />
    </Stack.Navigator>
   </NavigationContainer>
    
    </>
  );
}


