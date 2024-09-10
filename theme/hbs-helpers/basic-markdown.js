const { SafeString } = require('handlebars');


function markdownToHtmlFull(markdown){
    var showdown  = require('showdown')
    converter = new showdown.Converter(),
    html      = converter.makeHtml(markdown)
    return html
}

const paragraphSplitAndMarkdown = (text) => {
  const expr = /\r\n|\r|\n/g;
  const lines = Array.isArray(text) ? text.join('').split(expr) : text.split(expr);
  const output = lines
    .filter(line => line)
    .map(line => markdownToHtmlFull(line))
    .reduce((a, b) => `${a}<p>${b}</p>`, '');
  return new SafeString(output);
};


module.exports = { paragraphSplitAndMarkdown};
