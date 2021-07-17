@echo off
title 
cls
set /p Link="Enter Link: "
node index.js %Link%
pause