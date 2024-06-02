import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    demoImage: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
);

const Code = mongoose.model("Code", codeSchema);

export default Code;