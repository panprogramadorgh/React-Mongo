import { useState, useEffect, createContext } from "react";
import { updateUsersState } from "../func/utils";

export const PagesContext = createContext(null);

const PagesContextProvider = ({ children }) => {
  const [path, setPath] = useState("/");
  const [users, setUsers] = useState(null);
  useEffect(() => {
    updateUsersState(setUsers);
  }, []);

  useEffect(() => {
    window.history.pushState(null, "", path);
  }, [path]);

  const valueData = {
    pathState: { path, setPath },
    usersState: { users, setUsers },
  };
  return (
    <PagesContext.Provider value={valueData}>{children}</PagesContext.Provider>
  );
};

export default PagesContextProvider;
