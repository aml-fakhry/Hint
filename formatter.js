const fs = require('fs');
const path = require('path');
const os = require('os');
console.log(JSON.stringify(os.EOL));
const content = fs.readFileSync(path.join(__dirname, './in.txt'), {
  encoding: 'utf-8',
});
const lines = content.split(os.EOL);
const linesTokens = lines
  .map((l) => {
    const key = l.substring(0, l.indexOf('(GMT')).trim();
    const tokens = l.split(' ');
    const IANA = tokens.find((t) => t.includes('/'));

    const time = l.replace(key, '').replace(IANA, '').trim();
    const timeZone = time.substring(time.indexOf('(')).trim();
    return IANA
      ? `(${[
          `'${timeZone}'`,
          `'${timeZone}'`,
          `'${key
            .split(' ')
            .join('_')
            .toUpperCase()
            .replace('.', '')
            .replace('-', '_')
            .replace('(', '_')
            .replace(')', '_')}'`,
          `'${IANA.toUpperCase()}'`,
          getOffset(timeZone),
        ].join(', ')})`
      : undefined;
  })
  .filter((v) => !!v);
//[timeZone, timeZone, key ,IANA, getOffset(time)]
console.log(linesTokens.join(',' + os.EOL));

function getOffset(time) {
  const offset = time.substring(time.indexOf('GMT') + 3, time.indexOf(':'));

  return Number(offset) * 60;
}
