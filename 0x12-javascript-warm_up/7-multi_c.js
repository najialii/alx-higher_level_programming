#!/usr/bin/node
/*  a script that prints x times */
const x = process.argv[2];

if (x === undefined || isNaN(parseInt(x))) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < parseInt(x); i++) {
    console.log("C is fun");
  }
}
