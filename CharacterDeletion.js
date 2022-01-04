/**
 * CharacterDeletion
 *
 * @param str: The first string given
 * @param sub: The given second string
 * @return: Returns the deleted string
 */

(function CharacterDeletion(str, sub) {
  return str.replace(new RegExp(`[${sub}]`, 'g'), '');
})('They are students', 'aeiou');
