import Code from "../../models/code_contribution/code_contribution_models.js";


// logic for posting the code by a user
const postCode = async (req, res) => {
    try {
        const { title, code } = req.body;
        if (!title || !code) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // for not getting password of the user 
        req.user.password = undefined;
        // console.log(req.user);
        // res.send("ok");
        const post = new Code({
            user: req.user._id,
            title,
            code
        })

        const savedPost = await post.save();

        res.status(201).json({
            success: true,
            message: "User successfully post the code for review",
            savedPost
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error from code controllers"
        });
    }
}

export default postCode;