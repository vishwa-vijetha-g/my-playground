package seleniumplayground;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class driverSingleton {

    private static driverSingleton singletonInstance = null;
    private WebDriver driver = null;

    private driverSingleton(){
        
	    WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    
    }

    public static driverSingleton getSingletonInstance() {
        if (singletonInstance == null) {
            singletonInstance = new driverSingleton();
        }
        return singletonInstance;
    }

    public WebDriver getDriver() {
        return driver;
    }
    
}