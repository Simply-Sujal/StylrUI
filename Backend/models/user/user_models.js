import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Invalid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: [8, "Minimum 8 characters required for password"]
    }
},
    { timestamps: true }
)

const User = mongoose.model("User", userSchema);

export default User;