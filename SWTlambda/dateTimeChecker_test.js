Feature('dateTimeChecker');

Scenario('Test DateChecker Application', ({ I }) => {
  I.amOnPage('/DateChecker/');
  I.waitForElement('h2', 10); // h2 chứ không phải h1
  I.see('Date Time Checker', 'h2');

  // Điền dữ liệu hợp lệ
  I.fillField('#day', '15');
  I.fillField('#month', '6');
  I.fillField('#year', '2023');

  I.click('CHECK DATE');

  I.waitForElement('#result', 5);
  I.see('Date is valid', '#result');

  I.saveScreenshot('datechecker_test.png');
});

Scenario('Test Invalid Date', ({ I }) => {
  I.amOnPage('/DateChecker/');
  I.waitForElement('h2', 10);

  // Điền dữ liệu không hợp lệ
  I.fillField('#day', '32');
  I.fillField('#month', '13');
  I.fillField('#year', '2023');

  I.click('CHECK DATE');

  I.waitForElement('#result', 5);
  I.see('Invalid date', '#result');
});