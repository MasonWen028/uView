/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/stores';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PageNav from './src/components/Layouts/PageNav';
import Tabbar from './src/components/Layouts/Tabbar';
import Components from './src/pages/components';

function Profile() {
  return (
    <View>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View>
      <Text>Notifications!</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [currentScreen] = useState('Feed');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Feed':
        return <Components />;
      case 'Notifications':
        return <Notifications />;
      case 'Profile':
        return <Profile />;
      default:
        return <View />;
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
      justifyContent: 'space-between',
    },
  });

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <PageNav />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          {renderScreen()}
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
