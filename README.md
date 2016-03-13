[![NPM](https://nodei.co/npm/randomnumberandwordgenerator.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/randomnumberandwordgenerator)
[![npm version](https://badge.fury.io/js/randomnumberandwordgenerator.svg)](https://www.npmjs.com/package/randomnumberandwordgenerator)
<a href="https://www.npmjs.com/package/randomnumberandwordgenerator">
    <img src="https://img.shields.io/travis/badges/shields.svg"
         alt="build status">
</a>
[![npm downloads](https://img.shields.io/npm/dm/randomnumberandwordgenerator.svg?style=flat)](https://www.npmjs.com/package/randomnumberandwordgenerator)


Random number / word / string  Generator for Node JS / Express JS / Javascript that just works
=======================================

A small and reliable library for creating a random number / word / string of given length.         
Length must be an integer and greater than 0.

## Installation

```shell
  npm install randomnumberandwordgenerator --save
```
  
## Usage - Example 1

```
  var random = require('randomnumberandwordgenerator');
  var randomNumberGenerator = random.randomNumberGenerator;
  var randomNumber = randomNumberGenerator(30);
  console.log("This is randomness - " , randomNumber);
 
  prints some random number of length 30 ( example - 583894646777687598796646685553 )
```

## Usage - Example 2

```
  var random = require('randomnumberandwordgenerator');
  var randomWordGenerator = random.randomWordGenerator;
  var randomWord = randomWordGenerator(30);
  console.log("This is randomness - " , randomWord);
 
  prints some random word of length 30 ( example - eIAILRnjJTBdIDSKwJrInIxOcPGUtn )
```

## Usage - Example 3

```
  var random = require('randomnumberandwordgenerator');
  var randomStringGenerator = random.randomStringGenerator;
  var randomString = randomStringGenerator(30);
  console.log("This is randomness - " , randomString);
 
  prints some random string of length 30 ( example - cnbq0smX4PhNpLcFLGcSTLFoKct3ML )
```



## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.1 Initial release
* 0.0.2 New release

