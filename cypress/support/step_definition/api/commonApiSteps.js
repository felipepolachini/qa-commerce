import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Then('the response status should be {string}', (expectedStatus) => {
  const response = Cypress.env('responseBody');
  expect(response.status).to.eq(parseInt(expectedStatus));
});

Then('the response json should contain the expected data', () => {
  const testData = Cypress.env('testData');
  const response = Cypress.env('responseBody');
  
  Object.keys(testData).forEach(key => {
    expect(response.body).to.have.property(key, testData[key]);
  });
});

