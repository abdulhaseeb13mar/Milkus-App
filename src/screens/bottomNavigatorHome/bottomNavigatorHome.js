/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Header from '../../components/header/header';
import {View, Text, Image, StyleSheet} from 'react-native';

const BottomNavigatorHome = props => {
  return (
    <>
      <Header screenName="Home" />
    </>
  );
};

const style = StyleSheet.create({
  textStyle: {
    color: 'blue',
  },
});

export default BottomNavigatorHome;
