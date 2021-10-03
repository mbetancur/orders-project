Hello,

For this solution I decided to use a Queue data structure due to the fifo behavior of the suggested exercise. 
Due to short time to solve and as a very first delivery of the code, I beilieve things look good... nevertheless some stuff I'd like to aboard in a hypothetical next stage. 

    - Create a better established standard clean architecture (model layer, data structures layer etc..)
    - Create a layer to allow api connections (a supposed visual layer and/or database connections)
    - Implement basic npm libraries, like loggin, unit test etc.
    - Maybe implement ts (?)


### mockData
Data mocked from the example data added in the email excercise.

### queue.js
also implements a module pattern in order to encapsulate the important information, expose methods to interact with it and allow the application create as many queues as needed.

### index.js
It contains the implementation of the ```alloacate``` algorithm the one in charge to match the data and decide the order's delivery dates, as well as the arrange of the data and the respective excercise solution logged into the console.

## Run it
```node index.js```

I'm using node v12.14.1