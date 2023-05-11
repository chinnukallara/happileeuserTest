class template
{
 get cloudbutton(){return $("//*[@id='root']/div/main/div/div/div[2]/div[2]/div/div/div[3]/div/div/div[3]/div/button")}
 get divexpand(){return $("/html/body/div/div/main/div/div/div[2]/div")}
 get broadbtn(){return $("/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/ul[1]/li[4]/button[1]/div[1]/a[1]/span[2]/..//span[contains(text(),'Broadcast')]")}
 get democlick(){return $("//*[@id='undefined']/span/nav/ol/li[2]")}
 get templatelink(){return $("//*[@id='left-tabs-example-tab-1']")}
 get addtemplatebtn(){return $("//*[@id='left-tabs-example-tabpane-1']/div/div/div[1]/div/button")}
 

 get name(){return $("/html/body/div[3]/div/div/div[3]/div[1]/input")}
 get category(){return $("/html/body/div[3]/div/div/div[3]/div[2]/div[1]/div/div/div[1]/div")}
 get language(){return $("/html/body/div[3]/div/div/div[3]/div[2]/div[2]/div/div/div[1]/div[2]")}
 get std(){return $("/html/body/div[3]/div/div/div[3]/div[3]/div/div/div/div[1]/div")}
 get bodybtn(){return $("/html/body/div[3]/div/div/div[3]/div[5]/div/button")}
 get body(){return $('div[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]')}
 get preview(){return $("/html/body/div[3]/div/div/div[4]/button[2]")}
 get submit(){return $("/html/body/div[3]/div/div/div[4]/button[2]")}
 async clickbtn()
 {
    await this.cloudbutton.click();
 }
 async templatecreate()
 {
   // 
    
    await this.broadbtn.click();
    await browser.pause(3000)
    //await this.divexpand.moveTo(32,4);
    //await this.divexpand.scrollIntoView();
    await this.democlick.click();
    await browser.pause(3000)
    await this.templatelink.click();
    await this.addtemplatebtn.click();
    await this.name.setValue("template1")
    await this.category.click();
    await browser.keys('Enter')
    await browser.keys('Enter');
    await this.language.click();
    await browser.keys('Enter')
    await browser.keys('Enter');
    await this.std.click();
    await browser.keys('Enter')
    await browser.keys('Enter');
    await browser.pause(5000)
    await this.bodybtn.click();
    console.log("clicked")
    await browser.pause(5000)
    await this.body.click();
   console.log("body clicked")
    await this.body.setValue("Hi am template1")
    console.log("value set**")
    await this.preview.click();
    await browser.pause(3000)
 }
 async templatecreateview()
 {
    await this.submit.click();
    await browser.pause(3000)
 }
}export default new template();