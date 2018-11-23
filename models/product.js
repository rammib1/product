var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: false, max: 100},
    price: {type: Number, required: false},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);