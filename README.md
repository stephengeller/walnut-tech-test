Walnut
======

## How to run

Clone this repository, install the packages and run the server in your terminal and access it on the browser.
````
$ git clone git@github.com:stephengeller/walnut-tech-test.git
$ cd walnut-tech-test
$ npm install
$ npm start
````
The default port to access is 3000, so go to [localhost:3000](http://localhost:3000) once the server is running.


### Features
- Search through the customers.json data using the search bar
- Load as many of the data as desired with the "Load More" button
- Visualise average trait levels between banks with a bar chart using ChartJS


### How to Test

Run `npm test` to run tests. Two feature tests are currently failing due to learning React feature testing with Jest, but they have been left failing in order to show intention. These will be fixed ASAP.

## Future steps
  - Add more charts to visualise more interesting data from customers.json
  - Make the table more user-interactive (click on a name to open a full bio for example)
  - More feature tests
