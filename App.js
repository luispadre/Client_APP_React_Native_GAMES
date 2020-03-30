import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { SplashScreen } from 'expo';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './components/src/Login';
import  VariablesContext  from './Context/Variables.Context';
import  AuthContext from './Context/Auth.Context';
import  DataContext  from './Context/Data.Context';
import { Home } from './components/src/Home';
import useLinking from './navigation/useLinking';


const Stack = createStackNavigator();


export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
       
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <View style={styles.container}>
      <VariablesContext>
                    <AuthContext>
                      <DataContext>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <NavigationContainer>
                      <Stack.Navigator initialRouteName="Home">
                      <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Login" component={Login} />
                        
                      </Stack.Navigator>
                    </NavigationContainer>
                    </DataContext>
                </AuthContext>
                </VariablesContext>
      </View>
      </SafeAreaView>
    );
  
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});