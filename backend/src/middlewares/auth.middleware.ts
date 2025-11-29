import jwt from "jsonwebtoken";

// Middleware to protect private routes
export const protect = (req, res, next) => {
    // token from header (Authorization header)
    // "Bearer tokenHere"
    const token = req.headers.authorization?.split(" ")[1];

    // no login no token
    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);

        (req as any).user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
