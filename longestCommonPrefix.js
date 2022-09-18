// basmo, badro, sahaa
(function longestCommonPrefix(strs) {
  let longestPrefix = 0;

  for (let len = 1; len <= strs[0].length; len++) {
    const prefix = strs[0].substring(0, len);
    let counter = 0;
    strs.forEach((str) => {
      if (str.startsWith(prefix)) {
        counter++;
      }
    });

    if (counter === strs.length) {
      longestPrefix = len;
    } else {
      break;
    }
  }

  return strs[0].substring(0, longestPrefix);
})(['flower', 'flow', 'flight']);
