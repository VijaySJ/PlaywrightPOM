// // src/config/global-setup.js
// const { chromium } = require('@playwright/test');
// const path = require('path');
// const LoginPage = require('../pages/LoginPage').default; // Import the LoginPage class correctly

// module.exports = async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   const loginPage = new LoginPage(page); // Instantiate the LoginPage properly
//   await loginPage.openUrl();
//   await loginPage.login('Admin', 'admin123');

//   await page.waitForSelector('//h6[text()="Dashboard"]'); // Ensure the dashboard is loaded after login

//   await page.context().storageState({
//     path: path.resolve(__dirname, '../../storageState.json'), // Save session data for reuse
//   });

//   await browser.close();
// };