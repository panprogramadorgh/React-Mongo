import { useState, useEffect, useContext } from "react";
import { updateUsersState, checkEmptyFields } from "../func/utils";
import { PagesContext } from "../contexts/PagesContext";
import { AiOutlineCloseSquare } from "react-icons/ai";
import "../stylesheets/UserCard.css";

const UserCard = ({ userData }) => {
  const { usersState } = useContext(PagesContext);

  const getDefaultInputs = () => ({
    username: "",
    surname: "",
    age: "",
    description: "",
  });
  const [inputs, setInputs] = useState(getDefaultInputs());

  const [updatingUser, setUpdatingUser] = useState(false);

  const { _id } = userData;
  const handleDeleteButtonClick = () => {
    fetch("http://localhost:4000/api/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then(() => {
        setUpdatingUser(false);
        updateUsersState(usersState.setUsers);
      })
      .then((err) => console.error(err));
  };

  const handlerUpdateButtonClick = () => {
    const hasEmptyFields = checkEmptyFields(inputs);
    if (hasEmptyFields) return window.alert("Please fill all fields");
    const typeParsedInputs = { ...inputs, age: Number(inputs.age) };
    if (!typeParsedInputs instanceof Number)
      return window.alert("Age is not number");
    fetch("http://localhost:4000/api/users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: { _id },
        update: typeParsedInputs,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusError) return console.error(data);
        updateUsersState(usersState.setUsers);
        setUpdatingUser(false);
      })
      .catch((err) => console.error(err));
  };
  const handleCancelButtonClick = () => {
    setUpdatingUser(false);
    setInputs(getDefaultInputs());
  };

  const handleEditButtonClick = () => {
    setUpdatingUser(true);
  };

  return (
    <div className="UserCard">
      <div className="delete-button" onClick={handleDeleteButtonClick}>
        <AiOutlineCloseSquare />
      </div>
      {updatingUser ? (
        <>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={inputs.username}
              onChange={({ target }) =>
                setInputs({ ...inputs, username: target.value })
              }
            />
            <input
              type="text"
              placeholder="Surname"
              value={inputs.surname}
              onChange={({ target }) =>
                setInputs({ ...inputs, surname: target.value })
              }
            />
            <input
              type="text"
              placeholder="age"
              value={inputs.age}
              onChange={({ target }) =>
                setInputs({ ...inputs, age: target.value })
              }
            />
            <textarea
              placeholder="Description"
              value={inputs.description}
              onChange={({ target }) =>
                setInputs({ ...inputs, description: target.value })
              }
            ></textarea>
          </div>
          <div className="button-container">
            <button
              className="update-button"
              onClick={handlerUpdateButtonClick}
            >
              Update
            </button>
            <button className="cancel-button" onClick={handleCancelButtonClick}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="data-container">
            <h2 className="username">{userData.username}</h2>
            <h2 className="surname">{userData.surname}</h2>
            <h2 className="age">{userData.age}</h2>
            <p className="description">{userData.description}</p>
          </div>
          <div className="button-container">
            <button className="edit-button" onClick={handleEditButtonClick}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
