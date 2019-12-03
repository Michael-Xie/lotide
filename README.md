# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xiemicha/lotide`

**Require it:**

`const _ = require('@xiemicha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Return the first element of array
* `tail(array)`: Return a slice of an array from second element onwards
* `middle(array)`: Return an array of the middle elements of an array
* `countOnly(array, object)`: Return an object with the num of occurrences in array for names marked true in object 
* `eqArrays(array1, array2)`: Return true if the arrays are identical, false otherwise
* `findKeyByValue()`: Return key in object, if value is found
* `flatten(array)`: Return a one dimensional array. The array can have a maximumal of 2 levels of nested arrays.
