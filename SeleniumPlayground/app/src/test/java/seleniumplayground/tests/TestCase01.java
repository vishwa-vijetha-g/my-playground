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
            System.out.println("Test Case 01 - PASSED");
        }catch(Exception e){
            System.out.println("Test Case 01 - FAILED");
            e.printStackTrace();
        }
    }

}