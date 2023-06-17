import app from "./app.js";
import connectToDatabase from "./database.js";

export const databaseConnectedPromise = connectToDatabase();
const port = process.env.port || 4000;
app.listen(port, () => console.log(`>>> Server runnin at ${port}`));
