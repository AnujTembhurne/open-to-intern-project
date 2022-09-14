
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId; //need to check;


const internSchema = new mongoose.Schema({
    name: { type: String, reguired: true ,trim:true},
    email: { type: String, unique: true, required: true ,trim:true},
    mobile: { type: Number, required: true, unique: true,trim:true },
    collegeId: { type: ObjectId, ref:'college' },
    isDeleted: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model('intern', internSchema);


