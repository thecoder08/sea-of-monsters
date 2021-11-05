#!/usr/bin/env node
var input = 'start';
console.log('Percy Jackson and the Sea of Monsters');
console.log('Welcome to the Game!');
process.stdout.write('Type something to start: ');
process.stdin.on('data', function(data) {
  if (input == 'start') {
    console.log('Your name is Percy (Perceus) Jackson. You live in Manhattan with your mom. You\'ve been kicked out of numerous boarding schools, and are currently attending Meriwether College Prep. You are a half-blood: a half-human, half-god. You dad is Posiedon, the greek god of water, and during the summer you attend camp half-blood, a summer camp for half-bloods.');
    console.log('You have known this for a year. During your previous year at camp, you made some friends: Grover, a satyr (half goat half human), and Annabeth, a fellow half-blood that wants to be an architect. Her mother is Athena, the greek goddess of wisdom.');
    console.log('Do you attend school today?');
    process.stdout.write('Y/N: ');
    input = 'school';
  }
  else if (input == 'school') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('You walk to school.');
      process.exit();
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('Are you SURE about that? You need education...');
      process.stdout.write('Y/N: ');
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
});
