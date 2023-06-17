export async function updateUsersState(setUsersStateUpdater) {
  const response = await fetch("http://localhost:4000/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const databaseUsersData = await response.json();
  setUsersStateUpdater(databaseUsersData);
}

export function checkEmptyFields(inputsState) {
  const inputsStateValues = Object.values(inputsState).map((value) =>
    value.trim()
  );
  return inputsStateValues.includes("");
}
