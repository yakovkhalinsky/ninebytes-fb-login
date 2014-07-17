## Facebook Login API in an Angular Service

An implementation of the Facebook Login API (v2.0) using an Angular service.


## Getting the module

**From github**
`git clone git@github.com:yakovkhalinsky/ninebytes-fb-login.git ninebytes-fb-login`

**From bower**
`bower install angular-fb-login`

**From npm**
`npm install ninebytes-fb-login`


## Installation instructions

1. Do an `npm install`
2. Copy `src/fb.config.angular.js.example` to `src/fb.config.angular.js`
3. Edit `src/fb.config.angular.js` adding your appId in `APP_ID`
4. Edit `src/fb.config.angular.js` adding your app's permissions in `PERMISSIONS`
4. Edit `src/fb.config.angular.js` setting `DEBUG` to `true` will trigger console.log() for testing
5. Run `grunt` in the base directory to create `dist` directory with files you can use in your project.
6. To use the node.js verification module, update `lib/ninebytes-fb.js` with your app token in `APP_TOKEN`

**NOTE:** Step 5 also creates a minified version of the final distribution file. 

***NOTE: `src/fb.config.angular.js` is git ignore to avoid commiting credentials to the repo***


## To run example

1. Run `node app.js`
2. Visit `localhost:3000/index.html` in your browser


## Server-side user verification

There is an example route handler in `app.js` that you can use at `localhost:3000/:authToken/:userId` in your browser once the user is logged in.

Another example implementation can be found in `example/fb.js`.

If you used `npm install ninebytes-fb-login` get this module then use like so:
``` 
var fb = require('ninebytes-fb-login');

fb.validateUserAccessTokenAndId(userAccessToken, userId, function(error, isValid) {
    console.log('callback: ', error, isValid);
});
```


## Changelog

See CHANGELOG.md


## TODOs

1. Add tests
