/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import Header from '../../components/header/header';
import {View, Text, Image, StyleSheet} from 'react-native';
import {getUserData} from '../../service/service';

const BottomNavigatorHome = props => {
  useEffect(() => {
    getUserData();
  }, []);
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
