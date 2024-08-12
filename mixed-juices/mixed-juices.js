// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0 || limes.length === 0) {
    return 0;
  }
  let wedges_counter = 0;
  let index = 0;
  let limes_counter = 0;
  while (wedges_counter < wedgesNeeded && index < limes.length) {
    if (limes[index] === 'small') {
      wedges_counter += 6;
      index += 1;
      limes_counter += 1;
    }
    else if (limes[index] === 'medium') {
      wedges_counter += 8;
      index += 1;
      limes_counter += 1;
    }
    else {
      wedges_counter += 10;
      index += 1;
      limes_counter += 1;
    }
  }
  return limes_counter;

}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time_counter = 0;
  let index = 0;
  while (time_counter < timeLeft) {
    time_counter += timeToMixJuice(orders[index]);
       index++;

  } ;
  return orders.slice(index, orders.length);
}
