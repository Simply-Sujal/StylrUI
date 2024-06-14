const mongoose = require('mongoose');

const BlockSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    blockImage: {
        type: String,
        required: [true, "Demo Image is required"]
    },
    category: {
        type: String, required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Block', BlockSchema);
