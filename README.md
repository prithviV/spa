# Single Spa application

This application is build using Single Spa framework to demonstrate

1. Micro frontends using differnt UI frameworks like vue, react
2. How These multiple micro frontends gel together as single app using [Single spa](https://single-spa.js.org/)

# Project structure

Project contains total 4 packages bound together by lerna as package manager

1. features: Features section buit using ReactJS(runs on port:1114). "Read message from navigation" button lets you read the message intered and submitted in navigation section.
2. home: Home page content built using VueJS (runs on port:1111)
3. navbar: Top Navigation built using ReactJs (runs on port:1112). When "Send message" button is clicked, text entered in the text filed will be avaialble through out the application. (try it in "/features" page by clicking "Read message from navigation").
4. root-config: Root configuration that connects the dots(micro frontends) together (http://localhost:1110/)
5. styles: Styles for the frontend and uses bootstrap styles (runs on port:1113)
   Each package is independent of each other
5. communication: Exports function to store global message (runs on port:1115)

Each package is independent of each other

Since this project uses locally running applications, you should be running all of the applications

# Running Application

The project uses lerna

1. Install

```
  npm i
```

2. To install packages

```
  npm run bootstrap
```

> Make sure ports 1110, 1111, 1112, 1113, 1114 and 1115 are not in use before starting the application

3. Running the application

```
  npm run start
```

> Note: Once you have all the applications running use http://localhost:1110 to view complete application

4. Stop the application

```
  npm run nuke
```

this essentially kills all the running ports

# Running standalone application

Steps to test a single app:
1. Replace below url with details of your  localhost application (below example tests @test-mva/navbar assuming you have started the applicatoin)

    http://single-spa-playground.org/playground/instant-test?name=@test-mfa/navbar&url=%2F%2Flocalhost%3A1112%2Ftest-mfa-navbar.js&framework=react
2. Launch the above url in a browser 

Alternatively: 
you can use you can use [standalone webpack plugin](https://github.com/single-spa/standalone-single-spa-webpack-plugin])
