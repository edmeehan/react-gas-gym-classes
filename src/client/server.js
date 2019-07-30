/*
Convert google script server calls to more
familiar js/promise-based functions.
*/

const serverMethods = {};

// skip the reserved methods
const ignoredMethods = [
  'withFailureHandler',
  'withLogger',
  'withSuccessHandler',
  'withUserObject',
];

// check if production build and access to google
if (process.env.NODE_ENV === 'production' && google) {
  for (const method in google.script.run) {
    if (!ignoredMethods.includes(method)) {
      serverMethods[method] = (...args) => {
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler(resolve)
            .withFailureHandler(reject)[method](...args);
        });
      };
    }
  }
}

export default serverMethods;
