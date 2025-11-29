import { User } from "../models/User.ts";

export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const { firstName, lastName, email, phone, avatar } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                name: `${firstName} ${lastName}`,
                email,
                phone,
                image: avatar,
            },
            { new: true }
        ).select("-password");

        res.json(updatedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};
