const mongoose = require('mongoose');
const connect = (callback) => {
    mogoose.connect('mongodb://localhost:27017/home', {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
        console.log('链接成功～');
        callback();
    })

}
module.exports = connect;

