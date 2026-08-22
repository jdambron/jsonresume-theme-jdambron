const { SafeString } = require('handlebars');

const birthDate = (birth) => {
  const out = [];
  if (!birth || !Object.keys(birth).length) {
    return new SafeString('');
  }

  const hasPlace = Boolean(birth.place);
  const hasState = Boolean(birth.state);
  let year = '';
  if (birth.date) {
    const d = new Date(birth.date);
    if (!isNaN(d.getTime())) {
      year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(d);
    }
  }

  if (hasPlace) {
    out.push('<div> Born in ', birth.place);
    if (hasState) {
      out.push(', ', birth.state);
    }
    if (year) {
      out.push(' in ', year);
    }
    out.push('</div>');
  } else if (year) {
    out.push(`<div> Born in ${year}</div>`);
  }

  return new SafeString(out.join(''));
};

module.exports = { birthDate };
