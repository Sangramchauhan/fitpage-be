const app = require('express')();
const cors = require('cors');
const dataRoute = require('./routes/dataRoute');

// allowing domains to hit the api
const allowedDomains = ["http://localhost:3000"];

// Allows cros origin access
app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin) return callback(null, true);
  
        if (allowedDomains.indexOf(origin) === -1) {
          var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      },
      methods: "GET",
      credentials: true,
    })
);

// init port 
const port = 8000;

// api routes
app.use('/api', dataRoute);

// started listening 
app.listen(port, () => {
    console.log('SERVER STARTED');
});