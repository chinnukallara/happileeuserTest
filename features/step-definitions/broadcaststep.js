import { Given,When,Then } from "@wdio/cucumber-framework";
import broadcastpage from "../pageobjects/broadcastpage";
Given(/^I am on the Broadcast creation page$/,async()=>{

    await broadcastpage.broadcastclick();

})
When(/^Enter the credentials of the Broadcast$/,async()=>{
    await broadcastpage.createbroadcast();
    await browser.pause(5000)

})
Then(/^should create the Broadcast$/,async()=>{

    await broadcastpage.message();
})