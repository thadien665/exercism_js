// @ts-check

import { match } from "assert";



/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let first_wheel_string = '';
  array1.forEach(element => {
    first_wheel_string += String(element);
  });

  let second_wheel_string = '';
  array2.forEach(element => {
    second_wheel_string += String(element);
  });
  
  return Number(first_wheel_string) + Number(second_wheel_string);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  
  let input_as_string = String(value);
  let array_string = [];
  for (let index = 0; index < input_as_string.length; index++) {
    array_string.push(input_as_string[index]);
    
  }
  array_string.reverse()
  let reversed_string = '';
  array_string.forEach(element => {
    reversed_string += element;
  });
  
  return input_as_string === reversed_string;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
  else if (Number(input.trim())) {
    return '';
  }
  else {
    return 'Must be a number besides 0';
  }
}
  


