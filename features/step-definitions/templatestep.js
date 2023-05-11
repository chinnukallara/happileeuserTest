import { Given,When,Then } from "@wdio/cucumber-framework";
import templatepage from "../pageobjects/templatepage";
Given(/^I am on the template creation page$/,async()=>{

await templatepage.clickbtn();
await browser.pause(3000)
})
When(/^Enter the credentials of the template$/,async()=>{
    await templatepage.templatecreate();
    
 })
Then(/^Then should create the template$/,async()=>{
    await templatepage.templatecreateview();
    
 })