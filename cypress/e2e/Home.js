import HomePage from './Home.page.cy';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const homePage = new HomePage();

Given('I was on the homepage', () => {
  homePage.visitHomePage();
});

When('I filled in the search box', () => {
  homePage.fillSearchBox('online');
});

Then('I looked at the search results', () => {
  homePage.verifySearchResults();
});
