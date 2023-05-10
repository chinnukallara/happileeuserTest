import { Given,When,Then } from "@wdio/cucumber-framework";
import projectpage from "../pageobjects/projectpage";
Given(/^I am on the project creation page$/,async()=>{

await projectpage.clickcreate();

})
When(/^Enter credentials of the project$/,async()=>{

 
    await projectpage.projectcreate();

})

Then(/^should display a message$/,async()=>{
    var a="project created"
   await console.log(a);

})
