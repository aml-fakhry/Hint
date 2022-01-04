/**
 * removeParentheses
 *
 * @param s: A string with lowercase letters and parentheses
 * @return: A string which has been removed invalid parentheses
 */
(function removeParentheses(s) {
  const str = [...s];
  const x = str.filter((x) => x === '(').length;
  const y = str.filter((x) => x === ')').length;

  x === 0 || y === 0 ? `${s.replace(/["'\(\)]/g, '')}` : '';
  for (let i = 0; i < Math.abs(x - y); i++) {
    x > y
      ? str.splice(str.lastIndexOf('('), 1)
      : str.splice(str.lastIndexOf(')'), 1);
  }
  console.log(str.toString().replace(/,/g, ''));
  console.log(typeOf(str.toString().replace(/,/g, '')));
  console.log(typeOf(s));
})('a(b(c(de)fgh)((((');
