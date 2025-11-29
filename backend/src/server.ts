import app from "./app.ts";
import dotenv from "dotenv";
import connectDB from "./config/db.ts";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

connectDB(MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
