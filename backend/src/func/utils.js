import User from "../models/user.model.js";

// crud functions

export const insertOne = async (newUserData) => {
  const newUser = new User(newUserData);
  try {
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const insertMany = async (newUsersData) => {
  const newUsersList = [];
  for (let i = 0; i < newUsersData.length; i++) {
    const newUserData = newUsersData[i];
    const newUser = new User(newUserData);
    try {
      await newUser.save();
    } catch (error) {
      throw error;
    }
    newUsersList.push(newUser);
  }
  return newUsersList;
};

export const findMany = async (query = {}) => {
  try {
    const documents = await User.find(query);
    return documents;
  } catch (error) {
    throw error;
  }
};

export const findOne = async (query = {}) => {
  try {
    return await User.findOne(query);
  } catch (error) {
    throw error;
  }
};

export const deleteOne = async (query) => {
  try {
    return await User.findOneAndDelete(query);
  } catch (error) {
    throw error;
  }
};

export const deleteMany = async (query) => {
  try {
    const deletedUsers = [];
    const usersData = (await User.find(query)).map(
      ({ username, surname, age, description }) => ({
        username,
        surname,
        age,
        description,
      })
    );
    for (let i = 0; i < usersData.length; i++) {
      const userData = usersData[i];
      const deletedUser = await User.findOneAndDelete(userData);
      deletedUsers.push(deletedUser);
    }
    return deletedUsers;
  } catch (error) {
    throw error;
  }
};

export const updateOne = async (query, newProperties) => {
  try {
    return await User.findOneAndUpdate(query, newProperties);
  } catch (error) {
    throw error;
  }
};

export const updateMany = async (query, newProperties) => {
  try {
    const updatedUsers = [];
    const usersData = (await User.find(query)).map(
      ({ username, surname, age, description }) => ({
        username,
        surname,
        age,
        description,
      })
    );
    for (let i = 0; i < usersData.length; i++) {
      const userData = usersData[i];
      const updatedUser = await User.findOneAndUpdate(userData, newProperties);
      updatedUsers.push(updatedUser);
    }
    return updatedUsers;
  } catch (error) {
    throw error;
  }
};

//

export const ArrayEqualOperator = (...arrs) => {
  const stringSortedArrs = arrs.map((eachArr) => eachArr.toSorted().toString());
  const [stringArrReference] = stringSortedArrs;
  return (
    stringSortedArrs.filter(
      (eachStringSortedArrs) => eachStringSortedArrs === stringArrReference
    ).length === stringSortedArrs.length
  );
};

export const checkUserModelProperties = (questionableUser) => {
  const requiredUserKeys = ["username", "surname", "age", "description"];
  const questionableUserKeys = Object.keys(questionableUser);
  return ArrayEqualOperator(questionableUserKeys, requiredUserKeys);
};
