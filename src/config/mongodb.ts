const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.get('Mongo.host'));

export default mongoose;