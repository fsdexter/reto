const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: "tentativa 1",
			computers:[
				{name:"computer1", path:"dir1"},
				{name:"computer2", path:"dir2"},
				{name:"computer3", path:"dir3"},
				{name:"computer4", path:"dir4"},
				{name:"computer5", path:"dir5"},
				{name:"computer6", path:"dir6"},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch("/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
