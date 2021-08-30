# machine_round_airbus

this is a simple user management app where users can resgister and either of 2 roles:
1. Admin 
2. User

The data is visible on based of this role. If you have admin role you will be able to see all users and have access to all crud operations for users.
If you have user role then you can only view your own data and dont have any access to crud operations.
While viewing the data you can sort the table on all columns and search on any value as well.

## Usage


App is deployed on [http://airbus-frontend.s3-website.us-east-2.amazonaws.com/]
when you login a jwt is issued for your user, this jwt is valid for 24 hours and after that you will need to login again.
this jwt is used for verification for every hhtp call you make to server


## Tech

App uses a number of open source projects to work properly:

- Vue.js - HTML enhanced for web apps!
- bootstrap - great UI boilerplate for modern web apps
- node.js - evented I/O for the backend
- Express - fast node.js network app framework [@tjholowaychuk]
- dataTables - for viewing data in table with pagination, sort, search functionality
- jQuery, and much more

## Installation and Development

App requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.
Used Vue-CLI for front end devlopement.
```sh
cd airbus/client
npm install
npm run-script serve
```

for back end need to install node and postgres
```sh
cd airbus/server
npm install
node server.js
```
the app is configured to run on localhost:8081 and server is also listening to same. server is running on localhost:8080.

note: in airbus/server/app/config/dbconfig change the postgres credential as per your install

For production environments...

```sh
npm install --production
NODE_ENV=production node server.js
```
```sh
cd airbus/client
npm run-script build
```

#### Test
for vue app
```sh
npm run-script test:unit
```
for node app
```sh
node test
```


### AWS
the CI/CD is set up to deploy latest code to S3 bucket and elastic beanstalk automatically whenever code is pushed or merged to main



