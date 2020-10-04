import firebase from '../../firebase';
// import firebase from 'firebase';
import 'firebase/firestore';

export const AddCustomerService = async (
  name,
  email,
  phone,
  location,
  perDayMilk,
) => {
  let statusref;
  var db = firebase.firestore();
  console.log(db);
  var customersRef = await db.collection('customers').doc();
  console.log(customersRef);
  await customersRef.set({
    name: name,
    email: email,
    phone: phone,
    location: location,
    perDayMilk: perDayMilk,
  });
  // .then(() => {
  //   console.log('chal gya');
  //   statusref = {status: true};
  // })
  // .catch(err => {
  //   console.log(err);
  //   statusref = {status: false};
  // });
  return statusref;
};
