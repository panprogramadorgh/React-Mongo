import {
  findMany,
  findOne,
  insertMany,
  deleteMany,
  updateMany,
  checkUserModelProperties,
} from "../func/utils.js";

export const getUsers = async (req, res, next) => {
  const { getOneUser } = req.query;
  try {
    const users =
      getOneUser === "true" ? await findOne({}) : await findMany({});
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const postUsers = async (req, res, next) => {
  try {
    if (!req.body instanceof Array || req.body.length === 0) {
      const err = new Error("Invalid request body");
      err.status = 500;
      throw err;
    }

    const newUser = await insertMany(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUsers = async (req, res, next) => {
  try {
    const deletedUsers = await deleteMany(req.body);
    res.status(200).json(deletedUsers);
  } catch (error) {
    next(error);
  }
};

export const updateUsers = async (req, res, next) => {
  const { query, update } = req.body;
  try {
    const updatedUsers = await updateMany(query, update);
    res.status(200).json(updatedUsers);
  } catch (error) {
    next(error);
  }
};
