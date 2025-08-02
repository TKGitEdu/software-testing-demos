const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:3000', // Sửa cổng từ 5500 thành 3000 để khớp với server.js
      show: true,
      windowSize: '1200x900',
      timeout: 10000, // Thêm timeout 10 giây để tránh lỗi nếu server chậm
      retries: 2,      // Thêm retry 2 lần nếu cần
      slowMo: 500
    }
  },
  plugins: {
    tryTo: { enabled: false }, // Vô hiệu hóa tryTo để loại bỏ cảnh báo deprecated
    retryTo: { enabled: false } // Vô hiệu hóa retryTo để loại bỏ cảnh báo deprecated
  },
  include: {
    I: './steps_file.js'
  },
  name: 'SWTendtoend',
};