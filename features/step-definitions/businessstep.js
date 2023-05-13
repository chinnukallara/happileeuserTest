import { Given,When,Then } from "@wdio/cucumber-framework";
import businesspage from "../pageobjects/businesspage";
Given(/^I am on the Business creation page$/,async()=>{

    await businesspage.businessclick();
})
When(/^Enter the credentials of the Business$/,async()=>{
    await businesspage.addbusiness();
    await browser.pause(4000)
    
})
Then(/^should create the Business$/,async()=>{
    await businesspage.message();
    
})