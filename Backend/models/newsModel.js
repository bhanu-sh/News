const { model, Schema } = require('../connection');

const mySchema = new Schema({
    newsTitle : String,
    user_id : String,
    user_name : String,
    type : String,
    newsContent : String,
    date : String,
    image : String,
});

module.exports = model( 'news', mySchema );
