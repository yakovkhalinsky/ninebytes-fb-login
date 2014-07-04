## Facebook Login API in an Angular Service

An implementation of the Facebook Login API (v2.0) using an Angular service.


## Installation instructions

1. First checkout a copy of this reposity with `git clone`
- Also available via `bower install angular-fb-login`

2. Do an `npm install`
3. Copy `src/fb.config.angular.js.example` to `src/fb.config.angular.js`
4. Edit `src/fb.config.angular.js` adding your appId in `APP_ID`
5. Edit `src/fb.config.angular.js` adding your app's permissions in `PERMISSIONS`
6. Run `grunt` in the base directory
- Combines source files into `dist/fb.angular.js` and `dist/fb.angular.min.js`
- Copies `dist/fb.angular.js` to `public/js/fb.angular.js` to use with the example web app
7. To use the node.js verification module, update `lib/ninebytes-fb.js` with your app token in `APP_TOKEN`

***NOTE: `src/fb.config.angular.js` is git ignore to avoid commiting credentials to the repo***


## To run example

1. Run `node index.js`
2. Visit `localhost:3000/index.html` in your browser


## Server-side user verification

There is an example route handler in `index.js` that you can use at `localhost:3000/:authToken/:userId` in your browser once the user is logged in.

Another example implementation can be found in `example/fb.js`.


## TODOs

1. Add tests
