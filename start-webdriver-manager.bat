echo @OFF

echo "Update webdriver-manager"
call npm run webdriver-manager update

echo "Start webdriver-manager"
call npm run webdriver-manager start