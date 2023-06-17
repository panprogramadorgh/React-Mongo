import UserCard from "./UserCard";

const UserList = ({ users }) => {
  if (users === null) return;

  const emptyUserArray = users.length < 1;
  return (
    <>
      {emptyUserArray
        ? "No users"
        : users.map((d, index) => <UserCard key={index} userData={d} />)}
    </>
  );
};

export default UserList;
