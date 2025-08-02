Feature('tamendtoend');

Scenario('Valid date: 29/2/2024 (leap year)', async ({ I }) => {
  I.amOnPage('http://127.0.0.1:3000/index.html');
  I.waitForElement('#day', 10); // Đợi element xuất hiện
  I.fillField('#day', '29');
  I.wait(2); // Dừng 1 giây để quan sát
  I.fillField('#month', '2');
  I.wait(2); // Dừng 1 giây để quan sát
  I.fillField('#year', '2024');
  I.wait(2); // Dừng 1 giây để quan sát
  I.click('#checkBtn');
  I.waitForElement('#result', 10);
  I.see('is a valid date', '#result');
});

Scenario('Invalid date: 31/4/2023', async ({ I }) => {
  I.amOnPage('http://127.0.0.1:3000/index.html');
  I.waitForElement('#day', 10); // Đợi element xuất hiện
  I.fillField('#day', '31');
  I.wait(2); // Dừng 1 giây để quan sát
  I.fillField('#month', '4');
  I.wait(2); // Dừng 1 giây để quan sát
  I.fillField('#year', '2023');
  I.wait(2); // Dừng 1 giây để quan sát
  I.click('#checkBtn');
  I.waitForElement('#result', 10);
  I.see('is not a valid date', '#result');
});
