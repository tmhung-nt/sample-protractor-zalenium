# Protractor Execution With Zalenium
## Run test locally
1. Install dependencies  
    * __npm install__
2. Start webdriver-manager  
    * Open a cmd window  
    * Run script __start-webdriver-manager.bat__
3. Start Protractor test execution  
    * Open another cmd window  
    * __npm run e2e__  

## Run test with Docker
1. Make sure webdriver-manager is stopped (to release port 4444)
2. Start Protractor test execution
    * Open a cmd window
    * Run script __run-test-in-zalenium.bat__
