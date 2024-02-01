const userRoute = require('./v1/user.route');
const authRoute = require('./v1/auth.route');
const helloRoute = require('./v1/hello.route');
const ticketRoute = require('./v1/ticket.route');
const busesRoute = require('./v1/buses.route');

const routeManager = (app) => {

    // API V1 Routes
    app.use('/v1/', helloRoute);
    app.use('/v1/auth', authRoute);
    app.use('/v1/user', userRoute);
    app.use('/v1/ticket', ticketRoute);
    app.use('/v1/bus', busesRoute);
}
    

module.exports = routeManager;