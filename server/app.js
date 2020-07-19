const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const cors = require('cors');
const port = process.env.PORT || 4000;

const app = express();

const schema = require('./schema/schema');
const testSchema = require('./schema/types_schema');

const mongoLogin = 'mongodb://username:password@ds12345.mlab.com:12345/graphql-project'; // replace this with your own mongodb username and pw

mongoose.connect(mongoLogin,
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once('open', () => {
    console.log('Yes! We are connected')
})

app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));


app.listen(port, () => { //localhost:4000
    console.log('listening for requests on port 4000');
});
