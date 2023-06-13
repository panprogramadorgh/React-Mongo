import app from "./app.js";
import database from "./database.js";

database();
const port = process.env.port || 3000;
app.listen(port, () => console.log(`>>> Server runnin at ${port}`));
