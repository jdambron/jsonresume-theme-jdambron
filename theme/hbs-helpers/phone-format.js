const { SafeString } = require('handlebars');

const phoneFormat = (phone) => {
  if (phone) {
    const formattedPhone = phone.replace(/ /g, '&nbsp;').replace(/-/g, '&#8209;');
    return new SafeString(formattedPhone);
  }
  return '';
};

module.exports = { phoneFormat };
