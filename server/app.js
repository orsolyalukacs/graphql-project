const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const cors = require('cors');
const port = process.env.PORT || 4000;

const app = express();

const schema = require('./schema/schema');
const testSchema = require('./schema/types_schema');

/* 
    mongodb://<username>:<password>@ds251618.mlab.com:51618/graphql-project
 */


mongoose.connect('mongodb://orsisi:makimakk22@ds251618.mlab.com:51618/graphql-project',
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