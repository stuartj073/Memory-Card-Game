# Memory Mario
![Am I Responsive Images](screenshots/amiresponsive.png)

Memory Mario is a memory card game set up to transport user's to a world already familiar or one that was familiar a long time ago. Using the main characters from Super Mario and Super Smash bro's, the user's must match up the correct characters with each other in order to complete the game in the specified time parameter. The game has in itself a local storage system that allows each individual player to challenge their high score upon each return to the site. The game music and sounds are all included as to add to the feel of a retro nintendo styled game. 

If you would like to visit the site and try out the game for yourself, feel free to do so by clicking this [link].(https://stuartj073.github.io/Memory-Card-Game/index.html)


## User Stories

- As a user, I want to access a presentable website.
- As a user, I want to play an interactive game that allows me to have fun.
- As a user, I want to be challenged when playing the game.
- As a user, I want to have a system of tracking my progress whilst also keeping an eye on the time limitation.
- As a user, I want to be able to access the game on all platforms.
- As a user I want to be able to contribute to the local leader-board as to challenge me and get myself more focused on improving.
- As a user I want to hear the game sounds that accompany each click of a card , match of a pair or incorrect match of a pair as I play the game.
- As a user I want to actively choose when to listen to game music and when not to using a sound toggle button.
- As an owner I want to facilitate the overall needs of the user.
- As an owner I want to provide a local storage system as to entice the user to come back and to try and bea their current high score.
- As an owner I want to present the website in a very clear manner with un-ambigious colours as to not be presenting the potential user with colour overload or a website that just doesn't make sense design-wise.


## UX/UI 

### Landing Page
The emphasis of the game is to mimic the layout of the original Super Mario Bro's gameboy theme. The font was downloaded through a third source to further push the Nintendo feel of the game itself. The landing page is set up in a simple nintendo game fashion whereby options are limited and the game is made abundantly clear. ![Landing page UX](screenshots/landingpage.png)

Each option is sectioned off in block div elements and has a hover effect added on to them to allow the user a visual represantation of where their cursor is pointed toward. The player can choose to continue on to the start game page which will in turn start the game automatically. If the player wants to have a run down of the game rules, they can do so by pressing the game rules button on the home screen. The rules box was made in a style that would make for easy reading. Black font color on white background, as well as the background of the modal being dimmed to allow the user to zone in on the exact purpose of the game. ![Rules UX](screenshots/rules.png)

The colours I have decided to utilise for the game include a bright red '#E52521' hex colour, akin to the iconic outfit sported by Mario, '#303956' for the main body writing and '#CDC8DA' for the background color of the main menu and the title behind the heading for the game page. The reason behind the red colour of the title is both self-explanatory and purposeful. The main reason behind it was actually to emphasise it over the backdrop (background-color of #CDC8DA). I felt that it not only served the atmosphere of the game but it also added value in standing out over the light blue sky as seen in the background image. ![Red title](screenshots/titlecolor.png)

### Game Page
The font colour and background colour were chosen in tandem with eachother. After much experimentation in choosing the two colours I decided upon the two as seen as I felt they worked brilliantly to project the game options and the the game heading for the start game page. I also thought of the styling behind the play button and the sound on/off button. I chose to adopt a greyish '#777777' background with a black color for the 'play game' button. As for the sound on and off I wanted to keep things as simple as possible with green for "SOUND ON", and red for "SOUND OFF". ![Game info](screenshots/gameInfo.png)

The colors of choosing for the overlays also involved a great deal of deliberation. I wanted to dim the background as much as possible as to communicate to the user that the game had come to a halt (either through victory or loss). For the game over overlay I decided to go with a dark barely translucent background nearly completely black with a slightly bluish font color (#627E9A). As for the victory overlay I decided to adopt more or less the same styles as for the game over lay with the inclusion of a white font for the writing, to differentiate from the font color shown when a loss has occured.
![Victory](screenshots/victory.png)
![gameOver](screenshots/gameOver.png)

## Features

### Existing Features
For this milestone project, I have ran with the idea of inlcuding 2 pages: The Menu screen and the Game screen Each screen will be accompanied by the core styles I have decided to use, while also differing in their own respective layouts.

#### Menu.html
The Menu screen meets the user and makes them fully aware of the core idea and nature of the website. The backdrop, a tribute to a typical nintendo video game allowing the user to identify with any potential video games they may or may not have encountered throughout their lifetime. The hero image/ title is too written in a nintendo/super mario font-style making the user feel directly acquainted with the nature of the video game. 

Along with the background image and hero title, I have decided to make the dropdown menu/options in a style similiar to that of what a user would typically see in any super mario video game once they have entered the first screen of the game. Each option is given its on block within a bigger grey block to give the sense that they are playing an actual Nintendo Game. Each option will direct the user to a new html page within the website while the heading of each page will direct the user back to the main menu of the website.

#### Start-game.html
The main part of the game will be enlisted within the start-game page. The structure of the page will make it very evident as to how the game will be played. The main heading will be at the top of the screen but in a smaller font-size, just to give more importance to the main function of this page. There will  be a game info section, detailing the number of flips, the time left in the game, and the score the player has at any given time throughout the game (each correct match will be rewarded with 10 points). 

The game itself will be a simple card matching memory game, whereby the user has to match up the correct icons with each other in the game until every card within the game section has been matched up. The game will be accompanied by background music, while each correct/incorrect flip will be accompanied by different sounds and alerts. When the game comes to completion, either through the timer running out or the user completing the match up sequence, a text overlay with the title of either "Game over" or "Victory!" will be displayed. This will take up the entire length and width of the screen with a slightly dark background. The user will then have the option to contribute to the high score leaderboard with their own name and score while also having the option to begin the game right over again.

To allow for more interest from the player I decided to include a 'record-time' parameter in the game info section. This will allow the user to challenge themself to beat their current score and to improve on it as much as they can whenever they play the game. Using localStorage within the browser, a player's best time will always remain within the parameter above the game area. 

#### Overlays

When the player has gone through either process an overlay with either the 'Victory' or 'Game Over' banner will be displayed along with the option to restart/play again. Accompanying each overlay will be the option to post one's own score up to the global leaderboard.

The leaderboard page enlists the top scorers of the game. By including this page to the website users will now have a visual competition upon which to improve their own game in. Using API's allows for a user to contirbute with their own score to the overall leaderboard upon completing the game either through victory (in correctly matching all cards) or through the game ending prematurely (time running out). 

### Features Left to Implement

#### Global Leaderboard

Upon going through the next stage of the course which deals with backend platforms and systems It would improve the overall interest in the game (from different users) if they were not just challenging their own record scores but also those of anyone who has access to the site. In setting up a global storage system that allows for players from anywhere in the world to contribute with their score to a leaderboard, the game would be a lot more enticing and challenging to play as a potential user.

## Technologies and Resources Used

### Languages
- HTML5
- CSS
- JavaScript
- jQuery

### Resources

#### Fonts and Images
-The CDNfonts website was utilised for the Nintendo styled lettering for the game.
-Pinterest was used for the the character icons for the matching element of the game.
-Unsplash for the nintendo logo placed on the back of each card.
-Balsamiq was used to convey wireframes upon which to make my ideas.
-Font awesome was used for the star ratings to signify how well the player/user was doing at any given stage throughout the game.

#### IDE
-Gitpod was used as the IDE workspace which allowed me to construct the website and Git was used for version control and to Push code to GitHub.

## Testing
### Manual Testing

#### Chrome Developer Tools
As with all javaScript projects, correct use of the console.log() function is pivotal to self testing of different functions throughout the span of the project. By logging a handwritten message into a function I was able to immediately see if functions were being recognised in the DOM. Chrome developer tools allowed for the easy recording of such functions as I was given immediate feedback as to the success of any function in question.

- JSHint was also used as a means of automating the testing of all the code, to validate and ensure that all javascript conventions were being thoroughly followed throughout the project lifespan.

- In order to check the responsiveness of the page on all devices, I actively engaged with the chrome developer tools and was constantly checking any minor changes mad through CSS on all the various different device screen resolutions as available in the developer tools. In using the dev tools function I was able to avidly check screen resolutions on :
- Moto G4
- Galaxy S5
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/8/8 Plus
- iPhone X
- iPad
- iPad Pro
- Surface Duo

- In tandem with the chrome developer tools, I was constantly checking how the deployed site was functioning on my Samsung S10 phone, as well as on my brother's iPhone 8.

#### HTML & CSS
- The HTML and CSS files were passed through the code validator [W3C](https://validator.w3.org/). There were a few errors found throughout the HTML such as extra closing div tags and an id being used by two span elements. There were no issues found with my CSS code. For the app.js and index.js there were a few missing semi-colons, undefined variables and unused variables. All issues were looked at and fixed. All code ran through the validators went through fine thereafter.

## Bugs

### Flip
One of the biggest issues facing this game is the aspect of flipping cards. There are three scenarios in which the user shouldn't be able to flip a card within the game.
The first major concern around this area is that for the game to function properly, the user should only be allowed to flip two cards in any sequence. This entails that a player shouldn't be able to click at multiple cards in quick succession with each card responding the the flipCard event listener as attached to them from the js.file. To counter act this bug it was therefore tantamount to be able to disable the function upon acting on the rest of the cards array once two cards have been chosen/ only allowing the function to be carried out once more when one card has been chosen. 

A simple way of fixing this issue is to literally lock the board. In doing so we must set up a variable called lock and initially set it to false, at the beginning of the flipCard function we must return the lock as being true so that once this condition is met then the rest of the function will not be carried out. In the incorrectMatch function we can also set the lock variable to true which will then allow the setTimeout function to run it's course of one second, again disabling the flipCard function from being able to be carried out. Once the timeOut has been carried out we can then set the lock variable back to false which will then allow the flipCard function to be able to work yet again. On the flip side, if the two cards matched, a remove event listener was then placed upon the two cards, removing the flip count and flip card functions respectively.

### iOS devices

Upon testing the website on different devices it became apparent that there was an issue with apple devices (iOS software based devices). When the user was attempting to play the game and flip each card, the cards would either glitch in and out of their front and back classes, or the cards would simply flip over revealing an empty card. To get a better understanding of the issue at hand, please see the video attached. [video](https://drive.google.com/file/d/1x20q8UN-MaX6J3W4EFh7cG296om9MLEU/view?usp=sharing).

Ofcourse, this was not ideal. However, upon looking at various articles and sites online it became apparent that this was in fact a very common issue that was occuring for many iOS users. The issue was iOS' handling of transformations and animations from browsers. The solution to this issue was recommended by my mentor through using the site [AutoPrefixer](https://autoprefixer.github.io/). The site was able to parse through the code and added any vendor prefixes as required for different operating systems. 

### Favicon error
An error that continued to come up in the console was an issue with favicon of the website. Upon searching on various different sites such as ![stack overflow](https://stackoverflow.com/) I came to the realisation that the error was showing up due to a netbeans issue and that to remove the error I simply had to include a small link in the head of each html file (as noted in each file).

## Deployment
To Deploy the project

I chose to host my website through Github Pages

### Deploying
On the menu above the project repositary choose the settings option.
Scroll down through the settings page until the 'Pages' option appears and then click on to it.
Within the 'Pages' option click the drop-down menu and under 'Source' select the Master Branch option.
The page will then refresh automatically and the website will thus be deployed.
To run the project locally:

### Cloning
Under the project repositary's name choose Clone or Download.
Copy the URL that appears within the 'Clone with hTTPS' section.
Open up Git Bash in whichever IDE you decide to use.
Change to the working directory you want the cloned directory to be made.
Type git clone and then paste the URL copied from Github.
Press enter and you will then have a copy of the local clone.

### Reflections 
Throughout the project I aimed to keep consistent commit messages throughout the entire lifespan of its completion, however looking back over my older comments it became apparent that I wasn't sticking to the guidelines I have read about and prepped myself up to be doing. As soon as I began noticing that these messages were becoming slightly more ambiguous I began to get back into a more rigid manner of naming each commit as to make each commit to the repositary easily recognisable from each other.

Another issue that may have been noticed upon looking through my commits is the constant chopping and changing of the time count for the game. This was only done as to check if the two overlays (game over and victory) were working as designed. I just wanted to make note of that here as I didn't do so throughout any of the commits I carried out. 

## Credit

### Acknowledgements

I'd like to place on record my sincere thanks to my mentor Cans Succulu. Cans was always on hand for any issue I had with the project and I am very grateful for his efforts and insight into how I could improve the overall functioning and look of the game.

I'd also like to thank the wider Code Institute community through the slack channel for any queries I had throughout my time on the project.
 
