import HouseModel from "models/HouseModel";
import dbConnect from "utils/db";

export default async function getAll(req, res) {
  await dbConnect();
  try {
    const result = await HouseModel.find();
    res.json(result);
  } catch (error) {
    res.status(400).json({ status: "error", message: "test" });
  }
}
