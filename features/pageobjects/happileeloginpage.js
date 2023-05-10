class happilee
{
    get maillink(){return $("//*[@id='root']/div/main/div/div/div/div[2]/div[2]/button[1]")}
    get mailid(){return $("//*[@id='loginEmail']")}
    get otp(){return $("/html/body/div/div/main/div/div/div/div[2]/div[2]/button[2]")}
    get submit(){return $("//*[@id='root']/div/main/div/div/div/div[2]/div[2]/div[2]/button[1]")}
    async openbrowser()
    {
        await browser.url("https://stage.happilee.io/login");
        await this.maillink.click();
      //  await browser.pause(100000)
        
    }
    async verifcation()
    {
        await this.mailid.click();
        await this.mailid.setValue("happileeuser@mailinator.com")
        await this.otp.click();
        await browser.pause(15000);
        await this.submit.click();
        //await browser.seleteSession();
    }
    async project()
    {
        await browser.url("https://stage.happilee.io/projects");
        //await browser.setTimeout({ implicit :15000 ,pageLoad : 10000})
    await browser.pause(3000)
    }
}export default new happilee();