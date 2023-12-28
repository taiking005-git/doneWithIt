import { NavigationContainer } from '@react-navigation/native'
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigation from './app/navigation/AppNavigation';
import OfflineIndicator from './app/components/OfflineIndicator';




export default function App() {

  return (
    <>
      {/* <OfflineIndicator visible={true} /> */}
      <NavigationContainer theme={navigationTheme}>
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}


