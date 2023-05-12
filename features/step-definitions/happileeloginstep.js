import { Given,When,Then } from "@wdio/cucumber-framework";
import happileeloginpage from "../pageobjects/happileeloginpage";
Given(/^I am on the login page$/,async()=>{
await happileeloginpage.openbrowser();
await browser.maximizeWindow();
})
When(/^Enter credentials of the login$/,async()=>{
await happileeloginpage.verifcation();
})
Then(/^I should go to the project creation page$/,async()=>{
await happileeloginpage.project();
//await browser.reloadSession();
})
