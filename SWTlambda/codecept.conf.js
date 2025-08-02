exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://tkgitedu.github.io/DateChecker/',
      
      host: 'hub.lambdatest.com',
      port: 443,
      protocol: 'https',
      user: 'tamdqse171713',
      key: 'LT_0vRrjBSlXcHH2HvBG6H2mUaucT8vsfoxuZAkSSxlruAGIK8',

      browser: 'chrome',
      
      desiredCapabilities: {
        browserName: 'Chrome',
        browserVersion: 'latest',
        'LT:Options': {
          platformName: 'Windows 10',
          name: 'CodeceptJS DateChecker Test',
          build: 'DateChecker Build v1.0',
          console: true,
          network: true,
          video: true,
          visual: true
        }
      }
    }
  },

  include: {
    I: './steps_file.js'
  },

  timeout: 60,

  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  }
};