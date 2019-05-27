# Protractor Execution With Zalenium
## Run test locally
1. Install dependencies  
- npm install  
2. Start webdriver-manager  
- Open a cmd window  
- Run script *start-webdriver-manager.bat*  
3. Start Protractor test execution  
- Open another cmd window  
- npm run e2e  

## Run test with Docker
1. Make sure webdriver-manager is stopped (to release port 4444)
2. Start Protractor test execution
- Open a cmd window
- Run script *run-test-in-zalenium.bat*