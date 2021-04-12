# Single Spa application

This application is build using Single Spa framework to demonstrate

1. Micro frontends using differnt UI frameworks like vue, react
2. How These multiple micro frontends gel together as single app using [Single spa](https://single-spa.js.org/)

# Project structure

Project contains total 4 packages bound together by lerna as package manager

1. home: Home page content build using VueJS (runs on port:1111)
2. navbar: Top Navigation build using ReactJs (runs on port:1112)
3. root-config: Root configuration that connects the dots(micro frontends) together (http://localhost:1110/)
4. styles: Styles for the frontend and uses bootstrap styles (runs on port:1113)
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

> Make sure ports 1110, 1111, 1112, 1113 are not in use before starting the application

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
