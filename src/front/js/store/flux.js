const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		message: null,
		token: null,
	  },
	  actions: {
		signup: (formData, navigate) => {
		  fetch(
			"https://vigilant-space-sniffle-x59jx96wrvv4c9jr-3001.app.github.dev/api/signup",
			{
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body:  JSON.stringify(formData),
			}
		  )
			.then((response) => response.json())
			.then((data) => {
			  console.log("Data From Flux", data);
			  navigate.push("/");
			  window.location.reload();
			})
			.catch((error) =>
			  console.log("Ha ocurrido un error en el registro", error)
			);
		},
		login: (formData, navigate) => {
		  fetch(
			"https://vigilant-space-sniffle-x59jx96wrvv4c9jr-3001.app.github.dev/api/login",
			{
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body:  JSON.stringify(formData),
			}
		  )
			.then((response) => response.json())
			.then((data) => {
			  console.log(data);
			  setStore({ token: data });
			  sessionStorage.setItem("token", JSON.stringify(data));
			  navigate.push("/Private");
			  window.location.reload();
			})
			.catch((error) => console.log("Login Error", error));
		},
		logout: (navigate) => {
		  sessionStorage.clear();
		  console.log("Login out successfull");
		  setStore({ token: null });
		  navigate.push("/");
		},
	  },
	};
  };
  
  export default getState;