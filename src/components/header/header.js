import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import HamburgerIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import HamburgerIcon from 'react-native-vector-icons/Entypo';
const Header = props => {
  return (
    <View style={styles.HeaderContainer}>
      {/* <HamburgerIcon
        name="menu"
        size={50}
        color="#be3232"
        onPress={() => props.navigation.openDrawer()}
      /> */}
      <Text style={styles.HeaderName}>{props.screenName}</Text>
      {/* <Image source={ShareFoodLogo} resizeMode="contain" style={styles.Logo} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    // ...borderStyle,
    elevation: 5,
    paddingBottom: 2,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    backgroundColor: 'white',
    height: '8%',
  },
  Logo: {
    width: 40,
    height: 40,
    marginRight: 6,
    // ...borderStyle,
  },

  HeaderName: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Header;
