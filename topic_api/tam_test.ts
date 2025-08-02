
const assert = require('assert');

Feature('tam');

Scenario('GET /health endpoint returns OK status', async ({ I }) => {
  const response = await I.sendGetRequest('/health');
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.status, 'ok');
});

// ✅ Valid date scenarios
Scenario('POST /check-date with valid normal date', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 15, month: 7, year: 2023 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, true);
  assert.strictEqual(response.data.message, '15/7/2023 is a valid date');
});

Scenario('POST /check-date with valid leap year date', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 29, month: 2, year: 2024 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, true);
  assert.strictEqual(response.data.message, '29/2/2024 is a valid date');
});

Scenario('POST /check-date with valid date at month boundary', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 30, month: 4, year: 2023 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, true);
  assert.strictEqual(response.data.message, '30/4/2023 is a valid date');
});

// ❌ Invalid date scenarios
Scenario('POST /check-date with invalid day (too high)', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 32, month: 1, year: 2023 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, false);
  assert.match(response.data.message, /(Day must be between 1 and 31|is not a valid date)/);
});

Scenario('POST /check-date with invalid day (zero)', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 0, month: 5, year: 2023 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, false);
  assert.match(response.data.message, /(Day must be between 1 and 31|is not a valid date)/);
});

Scenario('POST /check-date with invalid month (too high)', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 10, month: 13, year: 2023 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, false);
  assert.match(response.data.message, /(Month must be between 1 and 12|is not a valid date)/);
});

Scenario('POST /check-date with invalid month (zero)', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 10, month: 0, year: 2023 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, false);
  assert.match(response.data.message, /(Month must be between 1 and 12|is not a valid date)/);
});

Scenario('POST /check-date with invalid year (negative)', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 10, month: 5, year: -1 });
assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, false);
  assert.match(response.data.message, /(Year must be a positive integer|is not a valid date)/);
});

Scenario('POST /check-date with invalid leap year date', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 29, month: 2, year: 2023 });
  assert.strictEqual(response.status, 200);
  assert.strictEqual(response.data.isValid, false);
  assert.match(response.data.message, /is not a valid date/);
});

Scenario('POST /check-date with missing day field', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { month: 5, year: 2023 });
  assert.strictEqual(response.status, 400);
  assert.match(response.data.message, /(Missing required field|day)/i);
});

Scenario('POST /check-date with missing month field', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 10, year: 2023 });
  assert.strictEqual(response.status, 400);
  assert.match(response.data.message, /(Missing required field|month)/i);
});

Scenario('POST /check-date with missing year field', async ({ I }) => {
  const response = await I.sendPostRequest('/check-date', { day: 10, month: 5 });
  assert.strictEqual(response.status, 400);
  assert.match(response.data.message, /(Missing required field|year)/i);
});
