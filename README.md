## Facebook Login API in an Angular Service

An implementation of the Facebook Login API using an Angular service.


## Getting the module

**From github**
`git clone git@github.com:yakovkhalinsky/ninebytes-fb-login.git ninebytes-fb-login`

**From bower**
`bower install angular-fb-login`

**From npm**
`npm install ninebytes-fb-login`


## Installation instructions

1. Do an `npm install` to setup the example node.js app
2. Copy `src/fb.config.angular.js.example` to `src/fb.config.angular.js`
3. Edit `src/fb.config.angular.js` adding your appId in `APP_ID`
4. Edit `app.js` adding you Facebook App Token in `APP_TOKEN`
5. Edit `src/fb.config.angular.js` adding your app's permissions in `PERMISSIONS`
6. Edit `src/fb.config.angular.js` setting `DEBUG` to `true` will trigger console.log() for testing
7. Run `grunt` in the base directory to create `dist` directory with files you can use in your project.

**NOTE:** Step 6 also creates a minified version of the final distribution file. 

***NOTE: `src/fb.config.angular.js` is git ignore to avoid committing credentials to the repo***


## Promise chaining from Init, Login and Logout

The `init()`, `login()` and `logout()` functions of the service return a promise.

You can use this to change other function calls once these promises resolve.

For example:

```
fb.init(ctrlScope).then(function() {
    // do something in here
});

fb.login().then(function() {
    // do something in here
});


fb.logout().then(function() {
    // do something in here
});

```

Note it is important to check the users authentication status in case either action was unsuccessful.


## To run example

1. Run `npm install`
2. Run `node app.js`
2. Visit `localhost:3000/index.html` in your browser


## Server-side user verification

There is an example route handler in `app.js` that you can use at `localhost:3000/:authToken/:userId` in your browser once the user is logged in.

Another example implementation can be found in `example/fb.js`.

If you used `npm install ninebytes-fb-login` get this module then use like so:

The example route uses the [ninebytes-node-fb-login](https://github.com/yakovkhalinsky/ninebytes-node-fb-login) module.


## Changelog

See CHANGELOG.md


## TODOs

1. Add tests
