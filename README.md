 # Rock, Scissor and Paper
The website is constructed and well-handled to use with its simple approach. You can play this game on all devices, and it makes it entertaining due to its high accessibility. The game is directed only to single players because you have only one opponent. 

Rock, Scissor, and Paper page is using emojis of items and has the appearance of a website that you saw during the 1990s by the usage of simple visual effects and comprehendible selections with random results.

Likewise, it’s challenging in the way that you are facing the computer as an opponent and your choices are being well observed for the user to understand what button was selected in the latest action.

The game is targeted towards people of all ages and seeks to be entertaining in all environments. Where the user can connect to each other by joining together to get as many points as possible where for later build a new community. 

![Responsive image](/assets/images/README.MD.ONE.png)

# Features


## Existing Features
Once you are entering the website you will face a short introduction to what the page is about and as soon as you are interacting with the selections, you'll start the game right away. 

The Rock, Scissor, and Paper page consist of only one page with an unchallenging HTML structure and visual effects by each selecting item thanks to the CSS. 

## Header 
![Header](/assets/images/header.png)

- The header is centered in the top of page for getting a strong signaling on what page you are on and what you expect as vistor. 

## Greeting & Introduction
![Greeting](/assets/images/intro.png)
- The webpage has a introduction where it says on what you can expect within game 

- It also greets you to create a sense of personality. By doing this the user is receive a sort of promise and understand the rules of game before he decides to begin with it.

- This is to make the user intrigued to start the game.

## The Game Option

![Responsive image](/assets/images/Scissor-zom.png)
- The game is operating in a way where the game participator is picking one of three options. 

-  When you have decided to select one of them the item is increasing its size. This makes it clear on what you choose to later take on the next move against the opponent. 

        (I have added a circle into where the user is choosing the scissor.  For comparing the changes and to distinguish the visual effects of what’s being ‘active’ or not)

## Gaming Result
![Responsive image](/assets/images/gaming-results.png)
- You will be witnessing the results below of the page, where it indicates either your winning - or losing score. The user is will able to tell how everything is going in the process of the game but have the opportunity to observe progress directly by receiving the information along with the participation.  

- In the resulting feature the game is demonstrating a sense of randomly set up and in that regard it makes it challenging for the user without no knowing the opponent's or computer's decision-making. You don't know what you will get by selecting a specific item thus getting results according to your action. 

## Favicon 

![Favicon](/assets/images/favicon.png)

- By better orientate yourself and remind you what kind of website you are visiting, then you'll observe the favicon. Which sends a message on what type of Rock, Scissor and Paper website is and what you should do with it.  

# Testing 
- Tested the webpage on these browsers: Brave Browser, Chrome, Firefox and Safari. 
- I confirmed that the game results are always correct.
- I confirmed that header, instructions, item selection and results are readable and easy to understand. 
- I confirmed that the colors and fonts chosen are easy to read and acessible by running the lighthouse: 

**To save some time and easy to conduct the lighthouse I was only able to come up with lighthouse figures in Swedish, therefore you'll have the English Translation here:**

**Prestanda: Performance**
**Tillgänglighet: Accessibility**
**Bästa Metoder: Best Practices**

![lighthouse](/assets/images/lighthouse.new.png)
# Features left to implement

- A final result is needed to further develop the webpage into a more entertaining and to be relevant for the user. There is no stop quite yet since you can go on for ever and get as many scores you want. 

- A reward system is bricks & mortor of all games nowadays, that is also required for making the game more fun and stay on with - it can otherwise led to boredom for the user hence don't know what to do with it in the end. 

# Validator Testing
## HTML
Two errors were found within HTML file but no need to change them since it dosen't stop the overall game to function.

## CSS
Two error were found, but was later fixed. 

## JavaScript

In the JS validator there were 13 warnings found within the JS file and unused function, that was being removed from the file. The 13 warnings states because it won't hurt the overall function of Rock, Scissor and Paper game. 


# Bugs 

### Solved Bugs


I fixed the bugs by reducing the space between and a change to its accurate definition: 

.result-score {
    margin-left: 1 rem;
	=> .result-score {
    		margin-left: 1rem;


.result-selection.winner {
opacity: 1;
font-size: 1,5rem;
}
=> .result-selection.winner {
opacity: 1;
font-size: 1.5rem;
}

- Thanks to those changes it generated a slight increase in the performance according to the lighthouse: ![lighthouse.old](/assets/images/lighthouse.png)![lighthouse.new](/assets/images/lighthouse.new.png).

# Deployment

### The site was deployed on GITHUB pages. The steps to deploy are as follows:
#### In the GITHUB repsitory, navigate to the settings tabs.
#### From the source section drop-down menu, select the master branch

-Once the branch has been selected, the page provided the link to completed website.

The live link can be found here and the project is being called: [SimpleGame](https://github.com/GustavFluur/PP2_Simple-Game). 

 # Credits 

## Content 
The website got the inspiration and got the structure from the [Love Maths](https://8000-gustavfluur-lovemaths-c9f3u8arlvx.ws-eu38.gitpod.io/), and the youtube channel: **How To Code Rock Paper Scissors In JavaScript by Web Dev Simplified** [Learning Video](https://www.youtube.com/watch?v=1yS-JV4fWqY).

Sites that gave me the support for the website were: 
[w3schools](https://www.w3schools.com/),
[MDN](https://developer.mozilla.org/en-US/), [CodeCademy](https://www.codecademy.com/) and [StackOverFlow](https://stackoverflow.com/).


# Media 

Use of favicon from the website of [icons8](https://icons8.com/).

The emojis were taking from globle and function key the "fn" button Macbook air [image](/assets/images/fn.globe.webp).