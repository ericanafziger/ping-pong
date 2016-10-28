# Ping Pong Application

#### Website will return list of numbers based on user's input, October 28, 2016

### By Erica Nafziger

## Description
This application allows the user to enter a number. It then takes the number and returns a string of numbers counting up to the number the user inputted. Numbers divisible by 3 are replaced with "ping"; numbers divisible by 5 are replaced with "pong"; numbers divisible by 15 are replaced with "ping-pong".

## Specs
* Application rejects input that is not a number
  * **Example Input: Hello**
  * **Example Return: Please enter a number OR program does not allow non  number to be typed with HTML**
* Application returns range of numbers from 1 to the number that was inputted
  * **Example Input: 8**
  * **Example Return: 1,2,3,4,5,6,7,8**
* Numbers that are divisible by 3 are replaced with "ping"
  * **Example Input: 8**
  * **Example Return: 1,2,ping,4,5,ping,7,8**
* Numbers that are divisible by 5 are replaced with "pong"
  * **Example Input: 8**
  * **Example Return: 1,2,ping,4,pong,ping,7,8**
* Numbers that are divisible by 15 are replaced with "ping-pong"
  * **Example Input: 15**
  * **Example Return: 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14, ping-pong**
* Application will allow user to enter a new number and see new results without having to refresh the page
  * **Example Input: 15**
  * **Example Return: 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14, ping-pong**
  * **Example New Input: 3**
  * **Example New Return: 1,2,ping**
* Application will return results as bullet points
  * **Example Input: 3**
  * **Example Return:**
    - 1
    - 2
    - ping

## Set Up
  * Clone this repository
  * Open in your browser
  * OR open in github pages [here](https://ericanafziger.github.io/ping-pong/)

## Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * jQuery
  
## Legal
  Copyright (c) 2016 Erica Nafziger All Rights Reserved.
  <enter> Licensed under the MIT license.
