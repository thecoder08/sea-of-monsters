#!/usr/bin/env node
var input = 'start';
console.log('Percy Jackson and the Sea of Monsters');
console.log('Welcome to the Game!');
process.stdout.write('Type something to start: ');
process.stdin.on('data', function(data) {
  if (input == 'start') {
    console.log('Your name is Percy (Perceus) Jackson. You live in Manhattan with your mom. You\'ve been kicked out of numerous boarding schools, and are currently attending Meriwether College Prep. You are a half-blood: a half-human, half-god. You dad is Posiedon, the greek god of the sea, and during the summer you attend camp half-blood, a summer camp for half-bloods.');
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
      console.log('You have gym class now, and your class is playing dodgeball. Do you participate?');
      process.stdout.write('Y/N: ');
      input = 'dodgeball';
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('You tell the bullies off instead. They chuckle and insult you but they go away and do something else.');
      console.log('You have gym class now, and your class is playing dodgeball. Do you participate?');
      process.stdout.write('Y/N: ');
      input = 'dodgeball';
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
  else if (input == 'dodgeball') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('You start playing dodgeball. Unfortunately, the bullies are the captains and they put all the wimpy kids as well as Tyson on your team, and themselves on the other.');
      console.log('One of the bullies throws an extremely fast ball at you. If it hit you, you surely would have died! They others throw more.');
      console.log('Slowly, the bullies grow and grow, until they become two storeys high! They are Laistrigonian Giants!');
      console.log('Do you attack with your sword?');
      process.stdout.write('Y/N: ');
      input = 'fightback';
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('You sit in the corner. Unfortunately, the bullies are the captains and they put all the wimpy kids as well as Tyson on your team, and themselves on the other.');
      console.log('One of the bullies throws an extremely fast ball at you. If it hit you, you surely would have died! They others throw more.');
      console.log('Slowly, the bullies grow and grow, until they become two storeys high! They are Laistrigonian Giants!');
      console.log('Do you attack with your sword?');
      process.stdout.write('Y/N: ');
      input = 'fightback';
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
  else if (input == 'fightback') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('You attack one of the giants. Then, out of no where, comes your friend Annabeth. She helps you take down the rest.');
      console.log('"Come on, Seaweed Brain!" she says. That\'s the nickname she came up with for you.');
      console.log('Do you follow Annabeth?');
      process.stdout.write('Y/N: ');
      input = 'follow';
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('You stand there in shock. Then, out of no where, comes your friend Annabeth. She defeats the giants easily.');
      console.log('"Don\'t just stand there, Seaweed Brain, come on!" she says. That\'s the nickname she came up with for you.');
      console.log('Do you follow Annabeth?');
      process.stdout.write('Y/N: ');
      input = 'follow';
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
  else if (input == 'follow') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('Annabeth takes you out to the street. The school administrators suspect that your were responsible for the disaster, so they try to chase you. Annabeth then throws a Golden Drachma onto the street and prays to the god Hades.');
      console.log('A car appears, and Annabeth gets in without hesitation.');
      console.log('Do you get in the strange car?');
      process.stdout.write('Y/N: ');
      input = 'getin';
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('Annabeth is becoming impatient.');
      console.log('"Come on, Seaweed Brain!" she says.');
      console.log('Do you follow Annabeth?');
      process.stdout.write('Y/N: ');
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
  else if (input == 'getin') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('In the car are three ladies. Two are blind, and one has one eye. They all share the vision from that eye.');
      console.log('The eye falls out of the socket and into your lap.');
      console.log('Do you give the eye back?');
      process.stdout.write('Y/N: ');
      input = 'eye';
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('The school administrators catch up with you. They take you into custody and arrest you.');
      console.log('BAD ENDING: too slow');
      console.log('There are other endings to explore!');
      process.exit();
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
  else if (input == 'eye') {
    if (data.toString() == ('Y' + require('os').EOL)) {
      console.log('Annabeth tells the ladies to go to camp half blood. You arrive safely.');
      console.log('GOOD ENDING: you made it to camp safely');
      console.log('There are other endings to explore!');
      process.exit();
    }
    else if (data.toString() == ('N' + require('os').EOL)) {
      console.log('Because the drivers can\'t see, they crash the car and everyone dies.');
      console.log('BAD ENDING: died in a car crash');
      console.log('There are other endings to explore!');
      process.exit();
    }
    else {
      console.log('Type Y or N.');
      process.stdout.write('Y/N: ');
    }
  }
});
