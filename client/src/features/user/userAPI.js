export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/orders/own/"
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    console.log("loggedIN user")
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/users/own",{
          credentials: "include",
        }
      );
      console.log(response)
      const data = await response.json();
      console.log(data)
      resolve({ data });
    } catch (error) {
     console.log(error.message,error.code) 
    }
    
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/" + update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json" },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
