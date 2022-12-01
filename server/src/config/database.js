import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ynov-student:admin@cluster0.ngcriv2.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Successfully connected to the database"))
.catch((error) => console.log(`Error during the connection : ${error}`))