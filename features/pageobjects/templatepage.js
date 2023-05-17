class template {
  get cloudbutton() {
    return $(
      "//*[@id='root']/div/main/div/div/div[2]/div[2]/div/div/div[3]/div/div/div[3]/div/button"
    );
  }
  get divexpand() {
    return $("/html/body/div/div/main/div/div/div[2]/div");
  }
  get broadbtn() {
    return $(
      "/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/ul[1]/li[4]/button[1]/div[1]/a[1]/span[2]/..//span[contains(text(),'Broadcast')]"
    );
  }
  get democlick() {
    return $("//*[@id='undefined']/span/nav/ol/li[2]");
  }
  get templatelink() {
    return $("//*[@id='left-tabs-example-tab-1']");
  }
  get addtemplatebtn() {
    return $(
      "//*[@id='left-tabs-example-tabpane-1']/div/div/div[1]/div/button"
    );
  }

  get name() {
    return $("/html/body/div[3]/div/div/div[3]/div[1]/input");
  }
  get category() {
    return $("/html/body/div[3]/div/div/div[3]/div[2]/div[1]/div/div/div[1]" ) }
  get language() {
    return $(
      "/html/body/div[3]/div/div/div[3]/div[2]/div[2]/div/div/div[1]/div[2]"
    )
  }
  get std() {
    return $("/html/body/div[3]/div/div/div[3]/div[3]/div/div/div/div[1]/div");
  }
  get bodybtn() {
    return $("/html/body/div[3]/div/div/div[3]/div[5]/div/button");
  }
  get body() {
    return $("div[class='notranslate public-DraftEditor-content']")
  }
  get preview() {
    return $("/html/body/div[3]/div/div/div[4]/button[2]");
  }
  get typename(){
    return $("input[class='editPreviewModal__input___hXn6k input__input___MNR5c']")
  }
  get submit() {
    return $("/html/body/div[3]/div/div/div[4]/button[2]");
  }
  async clickbtn() {
    // let array1=await $$("//div[@class='d-flex justify-content-between align-items-center bg-transparent border-0 px-0 pt-2 pb-1 card-header']")
   let i;
   let viewelmno=0
    let array1 = await $$('div[class="d-flex align-items-center"]');
    console.log("LENgth---", array1.length);
    // let cloudtext=await $("//h5[text()='Cloud API  Project']")
    await $('div[class="d-flex align-items-center"]').scrollIntoView({
      block: "center",
      inline: "center",
    });
    await (await $$('div[class="d-flex align-items-center"]'))[0].waitForDisplayed({ timeout: 10000 });
    for (  i = 0; i < array1.length; i++) {
      await browser.pause(1000)
  console.log("LOOpp--",i);
      const names= await(await array1[i]).getText()
      console.log("NAMEss--",await names);
      if((await names.includes("Cloud API Project"))){
         console.log("NAME found--",await names);
         await browser.pause(4000);
        viewelmno= i
        break;
      }
    }

    console.log("ELM no--", viewelmno);
      await(await $$('button[class="card__view_btn___utcA6 button__button___ZQ5nP"]'))[i].click();
console.log("CLICKD");
await browser.pause(6000)
  }
  async templatecreate() {
    

    await this.broadbtn.click();
    await browser.pause(3000);
    //await this.divexpand.moveTo(32,4);
    //await this.divexpand.scrollIntoView();
    await this.democlick.click();
    await browser.pause(3000);
    await this.templatelink.click();
    await this.addtemplatebtn.click();
    await this.name.setValue("template2750");
    await this.category.click();
    await browser.pause(2000)
    //await this.category.selectByVisibleText("UTILITY")
    
    await browser.keys("Enter");
   await browser.keys("Enter");
    await this.language.click();
   await browser.pause(3000)
    //await this.language.selectByVisibleText("English")
    await browser.keys("Enter");
    await browser.keys("Enter");
    await this.std.click();
    await browser.keys("Enter");
    await browser.keys("Enter");
   // await browser.pause(5000);
    await this.bodybtn.click();
    console.log("clicked");
   await browser.pause(5000);
    await this.body.click();
    console.log("body clicked");
    await this.body.setValue("Hi {{name}},welcome to our business.");
    console.log("value set**");
    await this.preview.click();
   await browser.pause(3000);
    //
  }
  async templatecreateview() {
     await this.typename.setValue("chinnu")
     await browser.pause(4000)
    await this.submit.click();
    
  }
}
export default new template();
