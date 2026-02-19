const dateHelpers = {
  MY: date => new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(date)),
  Y: date => new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(new Date(date)),
  DMY: date => new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date))
};

module.exports = { dateHelpers };
