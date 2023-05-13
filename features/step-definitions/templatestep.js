import { Given,When,Then } from "@wdio/cucumber-framework";
import templatepage from "../pageobjects/templatepage";
Given(/^I am on the template creation page$/,async()=>{
    await browser.pause(6000)

await templatepage.clickbtn();
await browser.pause(8000)
})
When(/^Enter the credentials of the template$/,async()=>{
    await templatepage.templatecreate();
    
 })
Then(/^should create the template$/,async()=>{
    await templatepage.templatecreateview();
    await browser.pause(5000)
    
 })