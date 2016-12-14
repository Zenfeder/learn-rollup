// Import a couple modules for testing.
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

// Import a logger for easier debugging.
import debug from 'debug';
const log = debug('app:log');

// The logger should only be disabled if we’re not in production.
if (ENV !== 'production') {
  // Enable the logger.
  debug.enable('*');
  log('Logging is enabled!');
} else {
  debug.disable();
}

// Run some functions from our imported modules.
const result1 = sayHelloTo('陈果');
const result2 = addArray([1, 2, 3, 4, 5]);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('陈果') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4, 5]) => ${result2}`;