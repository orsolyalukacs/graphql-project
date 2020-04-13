const mongoose = require('mongoose');
const MSchema = mongoose.Schema;

/* create the model
   constructing our schema to allow us create data in mongoDb
 */

const userSchema = new MSchema({
    name: String,
    age: Number,
    profession: String
})

module.exports = mongoose.model('User', userSchema);