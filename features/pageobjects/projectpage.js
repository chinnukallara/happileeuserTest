class project
{
    get create(){return $("//div[@id='root']/div/main/div/div/div[2]/div[2]/div/div/div[2]/div/div/div/button")}
    
    get pname(){return $("//*[@id='projectname']")}
    get oname(){return $("//*[@id='organization']")}
    get web(){return $("//*[@id='website']")}

    get category(){return $("//*[@id='react-select-2-placeholder']")}
   // 
   //get cat1(){return $("#react-select-3-option-3")}
   get confirm(){return $("/html/body/div[3]/div/div/div[3]/div[2]/button")}
    async clickcreate()
    {
    await this.create.click();
   // await browser.pause(5000)
    
    }

async projectcreate()
{
   // await browser.pause(5000)
    await this.pname.click();
    await this.pname.setValue("Project123")
   // await this.pname.clear();
    await this.oname.click();
    await this.oname.setValue("ABCFH")
    
  //  await this.oname.clear();
  await this.web.click();
    await this.web.setValue("www.abcfh.com");
   // await this.web.clear();
    await browser.pause(2000)
    await this.category.click();
    await browser.keys('Enter');
    //await browser.pause(3000)
    await browser.keys('Enter');
  //  let cat2=await $('#react-select-3-option-3')
  //  await cat2.click();
    //await this.cat1.selectByVisibleText("Education")
   // await this.cat1.click();
  

    await this.confirm.click();
    
}
}export default new project();