#!/usr/bin/env node
var input = 'start';
console.log('Percy Jackson and the Sea of Monsters');
console.log('Welcome to the Game!');
process.stdout.write('Type something to start: ');
process.stdin.on('data', function(data) {
  if (input == 'start') {
    console.log('Your name is Percy (Perceus) Jackson. You live in Manhattan with your mom. You\'ve been kicked out of numerous boarding schools, and are currently attending Meriwether College Prep. You are a half-blood: a half-human, half-god. You dad is Posiedon, the greek god of water, and during the summer you attend camp half-blood, a summer camp for half-bloods.');
    console.log('You have known this for a year. During your previous year at camp, you made some friends: Grover, a satyr (half goat half human), and Annabeth, a fellow half-blood that wants to be an architect. Her mother is Athena, the greek goddess of wisdom.');
    console.log('Your goal is to get to camp. This will be challenging because you will try to be stopped and killed by monsters!');
    console.log('Do you attend school today?');
    process.stdout.write('Y/N: ');
    input = 'school';
  }
  else if (input == 'school') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('You walk to school.');
      console.log('At school, you meet up with your friend Tyson. He is over 6 feet tall, and yet he is younger than you! He was allowed into the school for an initiative to help homeless people. He lives on the streets.');
      console.log('You greet Tyson, together you go into the school.');
      console.log('When you enter the school, the bullies begin harassing Tyson.');
      console.log('Do you murder the bullies with your sword, Riptide?');
      process.stdout.write('Y/N: ');
      input = 'murder';
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
  else if (input == 'murder') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('You uncap your pen which transforms into a giant sword made out of celestial steel. You swing at the bullies, but it just passes through them. Celestial weapons cannot hurt mortals.');
      console.log('Regardless, they get scared. They can\'t see magical things because of the Mist. You don\'t know what they saw but it sure must have been scary. They run away.');
      console.log('You have gym class now, and your class is playing dodgeball. Do you sit out?');
      process.stdout.write('Y/N: ');
      input = 'dodgeball';
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('You tell the bullies off instead. They chuckle and insult you but they go away and do something else.');
      console.log('You have gym class now, and your class is playing dodgeball. Do you sit out?');
      process.stdout.write('Y/N: ');
      input = 'dodgeball';
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
  else if (input == 'dodgeball') {
    process.exit();
  }
});
