// import { setHeadlessWhen } from '@codeceptjs/configure';

// setHeadlessWhen(process.env.HEADLESS);

// export const config: CodeceptJS.MainConfig = {
//   tests: './*_test.ts',
//   output: './output',
//   helpers: {
//     Appium: {
//       platform: 'Android',
//       app: 'D:/ThuMucTam/AndroidStudio/app/build/outputs/apk/debug/app-debug.apk',
//       device: 'emulator-5554',
//       host: 'localhost',
//       port: 4723,
//       path: '/', // Sửa từ '/wd/hub' thành '/'
//       desiredCapabilities: {
//         'platformName': 'Android',
//         'appium:deviceName': 'emulator-5554',
//         'appium:app': 'D:\\ThuMucTam\\AndroidStudio\\app\\build\\outputs\\apk\\debug\\app-debug.apk',
//         'appium:automationName': 'UiAutomator2',
//         'appium:appPackage': 'com.example.myapplication',
//         'appium:appActivity': '.MainActivity',
//         'appium:noReset': false, // Đặt lại trạng thái ứng dụng
//         'appium:fullReset': false // Không gỡ ứng dụng sau session
//       }
//     }
//   },
//   include: {
//     I: './steps_file.ts'
//   },
//   name: 'calculator_test',
//   plugins: {
//     tryTo: { enabled: false }, // Tắt plugin tryTo
//     retryTo: { enabled: false } // Tắt plugin retryTo
//   }
// }
import { setHeadlessWhen } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      path: '/',
      app: "D:\\ThuMucTam\\AndroidStudio\\app\\build\\outputs\\apk\\debug\\app-debug.apk",
      //app:'D:/ThuMucTam/AndroidStudio/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      desiredCapabilities: {
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.example.myapplication',
        'appium:appActivity': '.MainActivity',
        'appium:noReset': false,
        'appium:fullReset': false
      }
    }
  },
  include: {
    I: './steps_file.ts'
  },
  name: 'calculator_test',
  plugins: {
    tryTo: { enabled: false },
    retryTo: { enabled: false }
  }
};