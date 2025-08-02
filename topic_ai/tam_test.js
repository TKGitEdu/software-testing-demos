// Feature('tam');
// Scenario('test somethin ',  ({ I }) => {
//  I.amOnPage('https://getbootstrap.com/docs/5.1/examples/checkout/')
//  pause()
// });
   Feature('tam');
   Scenario('Fill Checkout Form', async ({I}) => {
  await I.amOnPage('https://getbootstrap.com/docs/5.1/examples/checkout/');

  // Fill personal information
  await I.fillField('#firstName', 'John');
  await I.fillField('#lastName', 'Doe');
  await I.fillField('#username', 'johndoe');
  await I.fillField('#email', 'john@example.com');

  // Fill address information
  await I.fillField('#address', '1234 Main St');
  await I.fillField('#address2', 'Apt 5');
  await I.selectOption('#country', 'United States');
  await I.selectOption('#state', 'California');
  await I.fillField('#zip', '12345');

  // Check shipping address options
  await I.checkOption('#same-address');
  await I.checkOption('#save-info');

  // Select payment method
  await I.checkOption('#credit');

  // Fill credit card information
  await I.fillField('#cc-name', 'John Doe');
  await I.fillField('#cc-number', '4242424242424242');
  await I.fillField('#cc-expiration', '12/25');
  await I.fillField('#cc-cvv', '123');

  // Submit the form
  await I.click('Continue to checkout');
});

