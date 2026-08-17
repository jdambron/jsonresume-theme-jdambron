const { SafeString } = require('handlebars');
const markdown = require('markdown-it')({ html: false, linkify: true });

const paragraphSplit = (text) => {
  if (text == null) {
    return '';
  }
  return new SafeString(markdown.render(text));
};

module.exports = { paragraphSplit };
