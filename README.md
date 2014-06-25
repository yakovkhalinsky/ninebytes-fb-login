## Facebook Login API in an Angular Service

An implementation of the Facebook Login API (v2.0) using an Angular service.


## Installation instructions

1. First checkout a copy of this reposity with `git clone`
2. Do an `npm install`
3. Edit `public/js/fb.service.angular.js` and add your appId in `FB_APP_ID`
4. Edit `public/js/fb.service.angular.js` and add required permissions in `FB_PERMISSIONS`
5. Compile dist file (in `dist` directory) by running `grunt`
6. To use the node.js verification module, update `lib/ninebytes-fb.js` with your app token in `APP_TOKEN`


## Example

Example and source files are located the `public` directory.


## To run example

1. Run `node index.js`
2. Visit `localhost:3000/index.html` in your browser


## Server-side user verification

There is an example route handler in `index.js` that you can use at `localhost:3000/:authToken/:userId` in your browser once the user is logged in.

Another example implementation can be found in `example/fb.js`.


## TODOs

1. Add tests
