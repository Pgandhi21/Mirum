# Mirum
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)
Heroku webpage: https://quiet-oasis-10226.herokuapp.com/

## Table of Contents

[Install](#install)<br />
[The Members](#members)<br />
[The Concept](#concept)<br />
[The User Experience](#experience)<br />
[The Build](#build)<br />


### Install - A list of required NPM packages
- bcrypt
- axios
- cheerio
- express
- express-handlebars
- express-sessions
- dotenv
- mysql2
- sequelize
- handlebars
- connect-session-sequalize



### Members

- Preksha Gandhi
- Zac Goad
- Darion Curtis


![Alt text](assets/mirumlanding.png?raw=true "Optional Title")
![Alt text](assets/mirumsearch.png?raw=true "Optional Title")
![Alt text](assets/mirumresults.png?raw=true "Optional Title")





### Concept
  More often than not, users parsing through various developer q/a websites, users are either looking for general information on certain topics and aren't sure where to begin, or they have specific questions and are soon lost in a sea of answers, unable to sift through what they don't need in order to find what they *do* need.  Mirum (latin for 'wonder') aims to solve this problem by scraping the most frequented websites (in the case of our earliest version, Stack Overflow) and gathering the most useful data to present to the user, saving the user time and effort.





### Experience
  The user is presented with a landing page that is clean and understandable, simple and intuitive.  There are two options that the user has before moving forward to the search page: they can create an account, or they can sign in to an account they have already made.  The point of this is to store user information for current and future use.  The user, once on the search page, is presented with two more options: the user can select one of several common and relevant languages and read information related to them, or the user can ask a more specific question about anything they want.  After the user is presented the results, they can click on any of the links and they will be redirected to Stack Overflow.  If they do not find the answer they are looking for, there is a link they can use to send a message to Mirum's help account.






### Build
  The build was, for the most part, pretty straightforward.  Three pages: a landing page, a search page, and a results page.  Constructing the pages was simple enough, just tasteful CSS over simple HTML with appropriate links, later converted into Handlebars for integration with JavaScript.  The toughest part was building the API routes that scraped the website we decided to gather information from (again, in this case, Stack Overflow) and making sure that all features worked properly.
