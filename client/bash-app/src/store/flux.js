const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			computers:[
				{id:"1",name:"computer1", path:"dir1"},
				{id:"2",name:"computer2", path:"dir2"},
				{id:"3",name:"computer3", path:"dir3"},
				{id:"4",name:"computer4", path:"dir4"},
				{id:"5",name:"computer5", path:"dir5"},
				{id:"6",name:"computer6", path:"dir6"}
			],
			spot:{}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				// try{
				// 	// fetching data from the backend
				// 	const resp = await fetch("/hello")
				// 	const data = await resp.json()
				// 	setStore({ message: data.message })
				// 	// don't forget to return something, that is how the async resolves
				// 	return data;
				// }catch(error){
				// 	console.log("Error loading message from backend", error)
				// }
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
			},
			access:(id, index) =>{
				const store = getStore();
				setStore({ spot: store.computers[index] });
			},
			addNewComputer:(formValue) =>{
				const store = getStore();
				store.computers.push(formValue);
			}
		}
	};
};

export default getState;
