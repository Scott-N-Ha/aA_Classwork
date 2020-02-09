const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    // console.log('enter a number');
    // let input = parseInt(rl);
    rl.question('Enter a number: ', (answer) => {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum, --numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));