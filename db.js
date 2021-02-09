require('dotenv').config()
const mongodb = require('mongodb');

const connectionString = process.env.mongodbString;


mongodb.connect(connectionString,{ useUnifiedTopology: true,useNewUrlParser : true },function (err,client) {
    module.exports = client.db();
    const app = require('./app');
    app.listen(process.env.PORT);
});