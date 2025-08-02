const { I } = inject();

Given('I open the date checker page', () => {
  I.amOnPage('/');
});

When('I enter date {string}', (date) => {
  I.fillField('#dateInput', date);
  I.click('#checkBtn');
});

Then('I should see result {string}', (result) => {
  I.see(result, '#result');
});
