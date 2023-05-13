class broadcast
{
    get broadcastlink(){return $("a[id='left-tabs-example-tab-0']")}
    get newbrodcstbtn(){return $("button[class='undefined button__button___ZQ5nP']")}
    
    get bname(){return $("input[class='broadcastDetails__broadcastName___wB5E_ input__input___MNR5c']")}
    get tempmessage(){return $("/html/body/div[3]/div/div/div[3]/div[1]/div[1]/div/div[2]/div/div/div[1]/div[2]")}
    get sample(){return $("/html/body/div[3]/div/div/div[3]/div[1]/div[1]/div/div[3]/input")}
    get name(){return $("/html/body/div[3]/div/div/div[3]/div[1]/div[1]/div/div[4]/input")}
    get position(){return $("/html/body/div[3]/div/div/div[3]/div[1]/div[1]/div/div[5]/input")}
    get location(){return $("/html/body/div[3]/div/div/div[3]/div[1]/div[1]/div/div[6]/input")}
    get matchall(){return $("div[class=' css-1j9kkly-singleValue']")}
    get selectparameter(){return $("/html/body/div[3]/div/div/div[3]/div[2]/div/div[2]/div[1]/div[3]/div[2]/div[1]/div/div[1]/div[2]")}
   get condition(){return $("div[id='react-select-5-placeholder']")}
   get value(){return $("input[class='filterParams__input___oy1TF input__input___MNR5c']")}
    get ba(){return $("//*[@id='tagList']/div/div/li[1]")}
    get software(){return $("//*[@id='tagList']/div/div/li[2]")}
    get selectall(){return $("/html/body/div[3]/div/div/div[3]/div[2]/div/div[1]/div/div/div[1]/form/div/input")}
   get test89(){return $("//*[@id='businessTypeList']/div/div/li[1]")}
   get send(){return $("button[class='false button__button___ZQ5nP']")}
   
   async broadcastclick()
    {
        await this.broadcastlink.click();
        await this.newbrodcstbtn.click();
    }
    async createbroadcast()
    {
        await this.bname.setValue("broadcast45")
        await this.tempmessage.click();
        await browser.pause(3000)
        console.log("clicked&&&&&&&&&&&&&&&&&&&&&&")
        await browser.keys("Enter")
        console.log("worked&&&&&&&&&&&&&&&&&&&&&&")
        await browser.keys("Enter")
      
        await this.sample.setValue("sample23")
        await this.name.setValue("chinnu")
        await this.position.setValue("tester")
        await this.location.setValue("Tvm")
        await this.matchall.click();
        await browser.keys("Enter")
        await browser.keys("Enter")
        await this.selectparameter.click();
        await browser.keys("Enter")
        await browser.keys("Enter")
        await this.condition.click();
        await browser.keys("Enter")
        await browser.keys("Enter")
        await this.value.setValue("2")
        await this.ba.click();
        await this.software.click();
        //await this.test89.click();
        await this.selectall.click();
        await this.send.click();
        await browser.pause(3000)

    }
    async message()
    {
        var a="broadcast created successfully"
        console.log(a);
    }
}export default new broadcast();