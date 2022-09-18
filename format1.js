const fs = require('fs');
const path = require('path');
const os = require('os');
var xlsx = require('node-xlsx');

// var obj = xlsx.parse(__dirname + '/LOV 14.xlsx'); // parses a file

var obj = xlsx.parse(fs.readFileSync(path.join(__dirname + '/LOV 14.xlsx')))[0]
    .data;
console.log(obj);
const dd = [...obj].join(',')
console.log(dd);

const txt = dd.split(os.EOL);
console.log({ txt });

const lines = txt.map((x) => {
    const c = x[1].toUpperCase()
    return `('${x[0]}' , '${x[1]}' ,'${c}')`;

});
console.log(lines);




