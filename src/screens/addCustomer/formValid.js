export const isFormValid = (name, email, phone, location, perDayMilk) => {
  return name === ''
    ? prepareResponse(false, 'name', 'Name is empty')
    : email === ''
    ? prepareResponse(false, 'email', 'Email is Empty')
    : !email.includes('@') || !email.includes('.')
    ? prepareResponse(false, 'email', 'Enter a valid email')
    : phone === ''
    ? prepareResponse(false, 'phone', 'Phone number is empty')
    : phone.length !== 11
    ? prepareResponse(false, 'phone', 'Phone number must have 11 digits')
    : phone.substring(0, 1) !== '0'
    ? prepareResponse(false, 'phone', 'Number must start with 0')
    : location === ''
    ? prepareResponse(false, 'location', 'Location is empty')
    : perDayMilk === ''
    ? prepareResponse(false, 'perDayMilk', 'Per Day Milk must not bhi empty')
    : perDayMilk === '0'
    ? prepareResponse(false, 'perDayMilk', 'Per Day Milk should not be 0')
    : prepareResponse(true, '', '');
};

const prepareResponse = (status, category, msg) => {
  return {
    status: status,
    errMsg: msg,
    errCategory: category,
  };
};
