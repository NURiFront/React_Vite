import { useEffect } from "react";
import { useState } from "react";

const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("10");
  console.log(input);
	const getData = async () => {
		try {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character
        `
			);
			const responseData = await response.json();
			const filterData = await responseData.results.filter(
				(item) => item.id <= input
			);
			// console.log(responseData.results);
			setData(filterData);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<input
				type="text"
				// value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
      <button onClick={getData}> add</button>
			{data.map((item) => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<p>{item.status}</p>
					<img src={item.image} alt="" style={{ width: 200, height: 250 }} />
				</div>
			))}
		</div>
	);
};

export default App;
