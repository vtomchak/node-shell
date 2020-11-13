const { fstat } = require("fs");

const fs = require('fs')
module.exports = fs.readdir('./', 'utf8', (err, files) => {
  const cmd = files.toString().trim();
  if(cmd === 'ls') {
    if (err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("prompt > ");
    }
  }
})

