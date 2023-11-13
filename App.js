import { NavigationContainer } from '@react-navigation/native'
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigation from './app/navigation/AppNavigation';




export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigation />
    </NavigationContainer>

  );
}
