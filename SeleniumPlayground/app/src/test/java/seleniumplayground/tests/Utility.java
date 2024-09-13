package seleniumplayground.tests;

import seleniumplayground.driverSingleton;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeTest;


public class Utility {

    public static WebDriver driver;

    public Utility(){
        
    }

    @BeforeTest()
    public void beforeTestMethod(){    
        driverSingleton ds =  driverSingleton.getSingletonInstance();
        Utility.driver = ds.getDriver();
        driver.manage().window().maximize();        
    }

    @AfterSuite()
    public void afterSuiteMethod(){
        //driver.close();
        //driver.quit();   
    }

}