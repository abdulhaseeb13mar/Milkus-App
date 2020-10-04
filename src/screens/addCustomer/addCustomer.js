/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/header/header';
import CustomTextInput from '../../components/textInputs/textInput';
import Button from '../../components/button/button';
// import {THEME_COLOR} from '../../components/constants/constants';
import {isFormValid} from './formValid';
import {AddCustomerService} from '../../service/service';

const AddCustomer = props => {
  const [name, setName] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [email, setEmail] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneErrMsg, setPhoneErrMsg] = useState('');
  const [location, setLocation] = useState('');
  const [locationErrMsg, setLocationErrMsg] = useState('');
  const [perDayMilk, setPerDayMilk] = useState('');
  const [perDayMilkErrMsg, setPerDayMilkErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      const formValidResponse = isFormValid(
        name,
        email,
        phone,
        location,
        perDayMilk,
      );
      if (formValidResponse.status) {
        setNameErrMsg('');
        setEmailErrMsg('');
        setLocationErrMsg('');
        setPhoneErrMsg('');
        setPerDayMilkErrMsg('');
        const response = await AddCustomerService(
          name,
          email.trim(),
          phone,
          location,
          perDayMilk,
        );
        if (response.status) {
          setLoading(false);
        } else {
          Alert.alert(response.message);
        }
      } else {
        errorMsgHandler(
          formValidResponse.errCategory,
          formValidResponse.errMsg,
        );
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      Alert.alert('Error occured while Add Customer');
    }
  };

  const errorMsgHandler = (errCategory, errMsg) => {
    if (errCategory === 'email') {
      setEmailErrMsg(errMsg);
      setNameErrMsg('');
      setPhoneErrMsg('');
      setLocationErrMsg('');
      setPerDayMilkErrMsg('');
    } else if (errCategory === 'name') {
      setNameErrMsg(errMsg);
      setEmailErrMsg('');
      setPhoneErrMsg('');
      setLocationErrMsg('');
      setPerDayMilkErrMsg('');
    } else if (errCategory === 'phone') {
      setPhoneErrMsg(errMsg);
      setNameErrMsg('');
      setEmailErrMsg('');
      setLocationErrMsg('');
      setPerDayMilkErrMsg('');
    } else if (errCategory === 'location') {
      setLocationErrMsg(errMsg);
      setPhoneErrMsg('');
      setNameErrMsg('');
      setEmailErrMsg('');
      setPerDayMilkErrMsg('');
    } else if (errCategory === 'perDayMilk') {
      setPerDayMilkErrMsg(errMsg);
      setLocationErrMsg('');
      setPhoneErrMsg('');
      setNameErrMsg('');
      setEmailErrMsg('');
    }
  };
  return (
    <>
      <Header screenName="Add Customer" />
      <ScrollView>
        <View style={styles.FormWrapper}>
          <View style={styles.NameContainer}>
            <CustomTextInput
              handleChange={text => setName(text)}
              value={name}
              label="Name"
              placeholder="Enter Name"
              errorMsg={nameErrMsg}
            />
          </View>
          <View style={styles.EmailContainer}>
            <CustomTextInput
              handleChange={text => setEmail(text)}
              value={email}
              label="Email"
              placeholder="Enter Email"
              errorMsg={emailErrMsg}
            />
          </View>
          <View style={styles.PhoneContainer}>
            <CustomTextInput
              handleChange={text => setPhone(text)}
              value={phone}
              label="Phone"
              placeholder="Enter Phone"
              KeyboardType="number-pad"
              errorMsg={phoneErrMsg}
            />
          </View>
          <View style={styles.LocationContainer}>
            <CustomTextInput
              handleChange={text => setLocation(text)}
              value={location}
              label="Location"
              placeholder="Enter Location"
              errorMsg={locationErrMsg}
            />
          </View>
          <View style={styles.PerDayMilkContainer}>
            <CustomTextInput
              handleChange={text => setPerDayMilk(text)}
              value={perDayMilk}
              label="Per Day Milk"
              placeholder="Enter Per Day Milk"
              errorMsg={perDayMilkErrMsg}
            />
          </View>
          <View style={styles.Button}>
            <Button
              Text="ADD CUSTOMER"
              TextStyle={{fontSize: 17}}
              onPress={() => {
                setLoading(true);
                handleSubmit();
              }}
              loading={loading}
            />
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="height" />
    </>
  );
};

const styles = StyleSheet.create({
  FormWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NameContainer: {
    marginTop: 20,
    width: '80%',
  },
  EmailContainer: {
    marginTop: 10,
    width: '80%',
  },
  PhoneContainer: {
    marginTop: 10,
    width: '80%',
  },
  LocationContainer: {
    marginTop: 10,
    width: '80%',
  },
  PerDayMilkContainer: {
    marginTop: 10,
    width: '80%',
  },
  Button: {
    marginTop: 10,
    width: '80%',
  },
});
export default AddCustomer;
