@echo off

cls

echo "Pull latest elgalu/selenium image"
call docker pull elgalu/selenium

echo "Build protractor-demo_e2e image"
call docker-compose build --no-cache e2e

echo "start zalenium hub"
call docker-compose up -d hub

echo "Start execution..."
call docker-compose run  e2e

echo "Clean up after execution"
call docker-compose down
