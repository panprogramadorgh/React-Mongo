import { connect } from "mongoose";

export default async function connectToDatabase() {
  try {
    await connect(
      "mongodb+srv://alvarobt7:AZSrAlW1RweC384Q@cluster0.zuv5x64.mongodb.net/users-manager",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`>>> Connected to database`);
    return true;
  } catch (error) {
    console.log(`>>> Error to connect to database: ${error.message}`);
    return false;
  }
}
