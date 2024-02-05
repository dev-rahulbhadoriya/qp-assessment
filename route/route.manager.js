const userRoute = require('./v1/user.route');
const authRoute = require('./v1/auth.route');
const helloRoute = require('./v1/hello.route');
const groceryRoute = require('./v1/grocery.route.js')
const routeManager = (app) => {

    // API V1 Routes
    app.use('/v1/', helloRoute);
    app.use('/v1/auth', authRoute);
    app.use('/v1/user', userRoute);
    app.use('/v1/grocery', groceryRoute)
}
    

module.exports = routeManager;