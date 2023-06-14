//Level 1
let pattern = '';
for (let i = 1; i <= 4; i++) {
  let x = 'X'.repeat(2 * i - 1);
  pattern += x + '\n';
}
console.log(pattern);

//Level 2
let pattern1 = '';
for (let i = 1; i <= 4; i++) {
  let spaces = ' '.repeat(4 - i);
  let x = 'X'.repeat(2 * i - 1);
  pattern += spaces + x + spaces + '\n';
}
console.log(pattern1);

