// @ts-check

import { template } from "@babel/core";

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('Humidity over 70%!')
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError;
  }
  else if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  try {actions.check()}
  catch { 
    switch (actions.check) {
      case ArgumentError:
        actions.alertDeadSensor();
        break;
      case OverheatingError:
        actions.alertOverheating();
        break;
    }}
  }


export function check(temperature) {
  if (temperature === null) {
    throw new ArgumentError;
  }
  else if (temperature > 500 && temperature < 600) {
    throw new OverheatingError(temperature);
  }
  else if (temperature > 600) {
    actions.shutdown();
  }
}

export function alertDeadSensor() {
 return 'sensor dead, technician needed';
}

export function alertOverheating() {
  return 'turning on warning light';
}

export function shutdown() {
  return 'shutting down';
}
