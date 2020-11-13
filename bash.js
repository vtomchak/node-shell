const exportsFromPwd = require('./pwd');
const fs = require('fs')
//console.log(exportsFromPwd);
const exportsfromLs = require('./ls')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd !== 'pwd') {
    process.stdout.write('Your input: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

})


