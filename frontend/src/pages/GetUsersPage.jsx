import { useContext } from "react";
import { PagesContext } from "../contexts/PagesContext";
import UserList from "../components/UserList";

const GetUsersPage = () => {
  const { usersState } = useContext(PagesContext);
  return (
    <div className="GetUsersPage">
      <UserList users={usersState.users} />
    </div>
  );
};

export default GetUsersPage;
