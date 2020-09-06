# Bobble AI - Frontend Assignment
## Framework: ReactJS

The Web Application demonstrates a SignUp screen, where in User can signup using Google/Facebook or Email+Password.

## Live Preview
https://bobble-react-assignment.netlify.app/

## Steps to run locally
1. Clone the repository
```
git clone https://github.com/rishabh-madan/bobble-react-assignment.git
```
2. Open directory in terminal
```
cd bobble-react-assignment
```
3. Install dependencies
```
npm install
```
4. Run
```
npm start
```

## Application Overview

The entry point of the application is ```src/index.js``` which renders the ```App``` component from ```src/App.js```.

The ```App``` Component is a Class Component which holds the Authentication State of the app. Also, it checks the ```localstorage``` on mounting and populates the state in case of "Returning User".

Based on the Authentication State, ```Home``` and ```SignUp``` Pages are rendered.

```Home``` Page shows the details of logged in User and a Button to Logout.
```SignUp``` Page shows all the available authentication methods: Google, Facebook, Form Submission.

The functions, such as "onSignUp" are passed down the tree using props. As soon as the user signs up using any of the methods, the ```userData``` in the ```App State``` gets updated and eventually the ```Home``` Screen is rendered with the updated ```userData```.

Similarly, ```onLogoutPressed``` is passed to ```Home``` Component as one of the props, which is invoked when ```Logout``` button is pressed. It resets the ```App State``` and also the ```localstorage```. And the user is taken back to the ```SignUp Page```.

