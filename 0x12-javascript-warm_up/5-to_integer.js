#!/usr/bin/node
/*  script that prints My number: <first argument converted in integer> if the first argument can be converted to an intege */

const firstArg = process.argv[2];

if (firstArg === undefined || isNaN(parseInt(firstArg))) {
  console.log('not a number');
} else {
  onsole.log('My number: ', parseInt(firstArg));
}
