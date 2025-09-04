const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("name email skills");
        if (!user) return res.status(404).json({ error: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
