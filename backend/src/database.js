import { connect } from "mongoose";

export default async function connectToDatabase() {
  try {
    await connect("mongodb://127.0.0.1/react-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`>>> Connected to database`);
    return true;
  } catch (error) {
    console.log(`>>> Error to connect to database: ${error.message}`);
    return false;
  }
}
