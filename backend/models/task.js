const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    taskCreationDate:{
        type: Date,
        default: Date.now
    },
    dueDate:{
        type: Date,
        required: true
    },
    PriorityLevel:{
        type:Number,
        required: true,
        min:1,
        max:5,
        default: 1
    },
    Labels:{
        type: [String],  // Now it is changed to an Array of Strings....
        required: true
    }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;