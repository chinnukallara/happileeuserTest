const path=require('path');
const { dirname } = require('path/posix');
class Business
{
    get democlick(){return $("//*[@id='root']/div/main/div/div/div[2]/div")}

    get businesslink(){return $("/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[1]/ul[1]/li[5]/button[1]/div[1]/a[1]/span[2]")}
    get addbusinessbtn(){return $("button[class='businessheader__add_business_btn___iowbQ button__button___ZQ5nP']")}
    
    get businessname(){return $("input[class='py-1 px-3 addBusiness__formInput___Uef0L']")}
    get category(){return $("//*[@id='root']/div/main/div/div/div[3]/div[2]/div/div/div[2]/form/div[3]/div/div/div[1]/div[2]")}
   get imagepath(){return $("//*[@id='root']/div/main/div/div/div[3]/div[2]/div/div/div[2]/form/div[4]/div")}
    get imagebtn(){return $("span[class='addBusiness__uploadIcon___T4dB4']")}
    get applybtn(){return $("/html/body/div[3]/div/div/div[3]/button[2]")}
   get savebtn(){return $("button[class='addBusiness__buttonStyle___X55cG d-flex justify-content-center align-items-center button__button___ZQ5nP']")}
   
   
    async businessclick()
    {

        await this.democlick.click();
        //await browser.keys("Enter")
        await this.businesslink.click();
        await this.addbusinessbtn.click();
        await browser.pause(3000)


    }
    async addbusiness()
    {
    //    //const path=require('path');
    //     //const { dirname } = require('path/posix');
    await this.businessname.setValue("Automobile");
    await this.category.click();
    await browser.keys("Enter")
    await browser.keys("Enter")
      await this.imagebtn.click();
       const filepath=path.join(--dirname,'../data/a.jpeg');
       const remoteFilePath= await browser.uploadFile(filepath)
      imagepath.setValue(remoteFilePath);

       await this.applybtn.click();
 await this.savebtn.click();

    }
    async message()
    {
        var a="Business created successfully"
        console.log(a)
    }
}
export default new Business();