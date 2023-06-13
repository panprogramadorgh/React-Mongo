import { connect } from "mongoose";

export default async function main() {
  try {
    await connect("mongodb://127.0.0.1/react-app");
    console.log(`>>> Connected to database`);
  } catch (error) {
    console.log(`>>> Disconnected from database`);
  }
}
