const { SafeString } = require('handlebars');
const markdown = require('markdown-it')();

const paragraphSplit = (text) => {
  if (text != null) {
    const paragraphs = text.split(/\r\n|\r|\n/g);
    const renderedParagraphs = paragraphs.map(p => markdown.render(p.trim())).join('');
    return new SafeString(renderedParagraphs);
  }
  return new SafeString('');
};

module.exports = { paragraphSplit };
