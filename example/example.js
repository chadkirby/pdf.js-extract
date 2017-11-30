var fs = require('fs');
var PDFExtract = require('../lib').PDFExtract;
var pdfExtract = new PDFExtract();
pdfExtract.extract(`${__dirname}/example.pdf`, { firstPage: 1, lastPage: 1 }, function(err, data) {
  if (err) {
    return console.log(err);
  }
  fs.writeFileSync(`${__dirname}/example-output.json`, JSON.stringify(data, null, '\t'));
  console.log(JSON.stringify(data, null, '\t'));
});
