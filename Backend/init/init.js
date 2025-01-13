import mongoose from "mongoose";
import foodModel from "../models/foodModel.js"; // Replace with the correct path to your food model
import foodData from "./foodData.js"; // Replace with the correct path to your food data file
import dotenv from "dotenv";

dotenv.config();

// Connect to the database
const connectDB = async () => {
    const mongoURI = process.env.MONGODB_URI;
    // console.log("Environment Variables:", process.env);

    console.log("MongoDB URI:", mongoURI); // Log the URI for debugging
    if (!mongoURI) {
        throw new Error("MONGODB_URI is not defined in .env file");
    }
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};

// Populate the database
const populateDatabase = async () => {
    try {
        await connectDB(); // Wait for the database to connect

        // Clear the collection if needed
        await foodModel.deleteMany({});
        console.log("Existing data cleared.");

        // Insert the food data
        await foodModel.insertMany(foodData);
        console.log("Food data populated successfully!");

        // Close the connection
        await mongoose.connection.close();
        console.log("Database connection closed.");
    } catch (error) {
        console.error("Error populating database:", error);
        process.exit(1); // Exit with failure status
    }
};

populateDatabase();
