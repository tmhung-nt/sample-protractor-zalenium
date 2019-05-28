@echo off

cls



echo "start selenium hub and nodes"
call docker-compose -f .\selenium-compose.yml up -d hub firefox chrome

echo "Remove protractor-demo_e2e image to force rebuild"
call docker rmi protractor-demo_e2e

echo "Start execution..."
call docker-compose -f .\selenium-compose.yml run  e2e

echo "Clean up after execution"
REM call docker-compose -f .\selenium-compose.yml down
