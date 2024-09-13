package seleniumplayground.tests;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;
public class TestCase01 {
    
    @Test()
    public void executeTestCase01(){
        try{  
            System.out.println("Test Case 01 - STARTED");
            WebDriver driver = Utility.driver;
            driver.get("https://www.spicejet.com/");
            driver.findElement(By.xpath("//div[text()='Currency']")).click();
            Thread.sleep(3000);
            List<WebElement> currencies = driver.findElements(By.xpath("//div[text()='Currency']/parent::div/parent::div//div[@class='css-76zvg2 r-homxoj r-ubezar']"));
            for(WebElement currency:currencies){
                if(currency.getText().equals("USD")){
                    currency.click();
                    break;
                }
            Thread.sleep(3000);
            driver.findElement(By.xpath("//div[text()='Search Flight']")).click();
            }
            System.out.println("Test Case 01 - PASSED");
        }catch(Exception e){
            System.out.println("Test Case 01 - FAILED");
            e.printStackTrace();
        }
    }

}