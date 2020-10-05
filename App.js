/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigatorHome from './src/screens/bottomNavigatorHome/bottomNavigatorHome';
import AddCustomer from './src/screens/addCustomer/addCustomer';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
// import {applyMiddleware, createStore} from 'redux';
// import ReduxThunk from 'redux-thunk';
// import rootReducer from './src/reducer/reducer';
// const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
const HEIGHT = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();
const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          headerMode="none"
          backBehavior="history"
          tabBarOptions={{
            style: styles.tabstyle,
            activeBackgroundColor: '#cfd8dc',
          }}>
          <Tab.Screen
            name="Home"
            component={BottomNavigatorHome}
            options={{
              title: 'home',
              tabBarIcon: ({focused, color, size}) =>
                tabBarIconHandler(AntDesignIcon, 'home', focused, color, size),
              tabBarLabel: ({focused, color}) =>
                tabLabelHandler('Home', focused, color),
            }}
          />
          <Tab.Screen
            name="AddCustomer"
            component={AddCustomer}
            options={{
              title: 'add',
              tabBarIcon: ({focused, color, size}) =>
                tabBarIconHandler(
                  AntDesignIcon,
                  'adduser',
                  focused,
                  color,
                  size,
                ),
              tabBarLabel: ({focused, color}) =>
                tabLabelHandler('Add', focused, color),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const tabBarIconHandler = (Comp, name, focused, color, size) => (
  <Comp
    name={name}
    color={focused ? 'black' : color}
    size={focused ? size + 5 : size}
  />
);
const tabLabelHandler = (name, focused, color) => (
  <Text
    style={{
      color: focused ? 'black' : color,
      fontSize: focused ? 14 : 12,
      fontWeight: focused ? 'bold' : null,
    }}>
    {name}
  </Text>
);

const styles = StyleSheet.create({
  tabstyle: {
    backgroundColor: '#fafafa',
    height: HEIGHT * 0.08,
  },
});

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <SafeAreaView>
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}>
    <Header />
    {global.HermesInternal == null ? null : (
      <View style={styles.engine}>
        <Text style={styles.footer}>Engine: Hermes</Text>
      </View>
    )}
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step One</Text>
        <Text style={styles.sectionDescription}>
          Edit <Text style={styles.highlight}>App.js</Text> to change this
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>See Your Changes</Text>
        <Text style={styles.sectionDescription}>
          <ReloadInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Debug</Text>
        <Text style={styles.sectionDescription}>
          <DebugInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>
          Read the docs to discover what to do next:
        </Text>
      </View>
      <LearnMoreLinks />
    </View>
  </ScrollView>
</SafeAreaView>; */
}
