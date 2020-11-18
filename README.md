# Scoober 
Takeaway - Frontend Challenge

#### Description

Start the game against someone who is online or play by yourself against the computer. 

#### How to setup and run it

To set it up locally on the projects root directory run:

```
npm install
```
Once all packages are installed, you can run the projects in two ways:

##### Production Mode:
1. Start the server by executing

	```
	npm run server
	```

2. Open the browser on [http://localhost:3000/](http://localhost:3000/)

	A build version is already included but you can rebuild it by executing

	```
	npm run build
	```


##### Development Mode:

1. First start the server for the websockets 

	```
	npm run server
	```
	It should start listening on port 3000 for socket connections

2. Start the client-side application by executing

	```
	npm start
	```
	the app should automatically open the browser at [http://localhost:4000/](http://localhost:4000/)

#### Technology stack
 - React
 - Redux
 - Typescript
 - Socket.io
 - Express.js (node.js)
 - Webpack
 - Jest (testing)
 - Css Modules
