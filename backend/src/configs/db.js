const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://backend-project:backend-project@cluster0.pmsh9.mongodb.net/MacProjectDatabase?retryWrites=true&w=majority"
        );
};