function findLongestPalindrome(sentence: string): string {
  let longestPalindrome = '';

  for (let i = 0; i < sentence.length; i++) {
    let word = '';
    for (let j = i; j < sentence.length; j++) {
      word += sentence[j];
      if (isPalindrome(word) && word.length > longestPalindrome.length) {
        longestPalindrome = word;
      }
    }
  }

  return longestPalindrome;
}

function reverseString(string: string): string {
  return string.split('').reverse().join('');
}

function isPalindrome(word: string): boolean {
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase());
}

export {};
