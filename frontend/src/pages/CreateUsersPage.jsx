import { useState, useContext } from "react";
import { PagesContext } from "../contexts/PagesContext";
import { updateUsersState } from "../func/utils.js";
import "../stylesheets/CreateUsersPage.css";

// PageContext

const CreateUsersPage = () => {
  const { usersState } = useContext(PagesContext);

  const [inputs, setInputs] = useState({
    username: "",
    surname: "",
    age: "",
    description: "",
  });

  const handleButtonClick = (event) => {
    event.preventDefault();

    fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([inputs]),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.statusError === 500)
          return window.alert("Error de validacion.");
        updateUsersState(usersState.setUsers);
        window.alert("Usuario creado correctamente.");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="CreateUsersPage">
      <form className="user-form">
        <h2>Create new user</h2>
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
          placeholder="Age"
          value={inputs.age}
          onChange={({ target }) => setInputs({ ...inputs, age: target.value })}
        />
        <textarea
          placeholder="Description"
          value={inputs.description}
          onChange={({ target }) =>
            setInputs({ ...inputs, description: target.value })
          }
        ></textarea>
        <button type="button" onClick={handleButtonClick}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUsersPage;
