import Code from "../../models/code_contribution/code_contribution_models.js";


// logic for posting the code by a user
const postCode = async (req, res) => {
    try {
        const { title, code, category } = req.body;
        if (!title || !code || !category) {
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
            code,
            category
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

// now I want to fetch all the codes on the basis of category 
const getCodesByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Category is required"
            });
        }

        const codes = await Code.find({ category }).populate("user", "-password -email");

        // if user input the category which is not present then 
        if (codes.length == 0) {
            return res.status(400).json({
                success: false,
                message: "Category you mentioned is not present in the list"
            });
        }

        res.status(200).json({
            success: true,
            codes
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error from code controllers"
        });
    }
}


// Fetch accepted codes by user
const getAcceptedCodesByUser = async (req, res) => {
    try {
        const userId = req.user._id;

        const acceptedCodes = await Code.find({ user: userId, isPublic: true }).populate("user", "_id name codes category")

        if (acceptedCodes.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Zero post is accepted by the admin,post some code for review."
            })
        }

        res.status(200).json({
            success: true,
            acceptedCodes
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error from code controllers"
        });
    }
}

export { postCode, getCodesByCategory, getAcceptedCodesByUser };