const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine', //Type of Framework used 
  directConnect: true,
    specs: ['src/*.spec.ts'], //Name of the Specfile
  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare() { 
      require('ts-node').register({ 
       project: require('path').join(__dirname, 'tsconfig.json') // Relative path of tsconfig.json file 
    });
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        suite: {
          displayNumber: true,    // display each suite number (hierarchical)
        },
        spec: {
          displayPending: true,   // display each pending spec
          displayDuration: true,  // display each spec duration
        },
        summary: {
          displaySuccesses: true, // display summary of all successes after execution
          displayFailed: true,    // display summary of all failures after execution
          displayPending: true,   // display summary of all pending specs after execution
        },
      })
    );
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: './Report',
      cleanDestination: true
      //...
    }));
    },
    onComplete() { 
      //global test tear-down goes here 
    }  
}