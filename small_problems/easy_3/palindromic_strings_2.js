function isRealPalindrome(string) {
  let cleanString = string.replace(/[^0-9a-z]/ig, '').toLowerCase();
  console.log(cleanString === cleanString.split('').reverse().join(''));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
