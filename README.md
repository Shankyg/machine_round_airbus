# machine_round_airbus

this is a simple user management app where users can resgister and either of 2 roles:
1. Admin 
2. User

The data is visible on based of this role. If you have admin role you will be able to see all users and have access to all crud operations for users.
If you have user role then you can only view your own data and dont have any access to crud operations.
While viewing the data you can sort the table on all columns and search on any value as well.


## Usage
App is deployed on http://airbus-frontend.s3-website.us-east-2.amazonaws.com/
when you login a jwt is issued for your user, this jwt is valid for 24 hours and after that you will need to login again.
this jwt is used for verification for every hhtp call you make to server



### local development
Used Vue-CLI for front end devlopement.
cd airbus/client
npm install
npm run-script serve
to run locally

for back end need to install node and postgres
cd airbus/server
npm install
node server.js

the app is configured to run on localhost:8081 and server is also listening to same. server is running on localhost:8080.

note: in airbus/server/app/config/dbconfig change the postgres credential as per your install

### AWS
the CI/CD is set up to deploy latest code to S3 bucket and elastic beanstalk automatically whenever code is pushed or merged to main



