import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";

// DATA
import hogs from "../porkers_data";
import Search from "./Search";

function App() {
	const [hogsData, setHogsData] = useState(hogs)
	const [greased, setGreased] = useState(false)
//-------------------------------------------------------- 
	const [searchName, setSearchName] = useState("")
	const [searchWeight, setSearchWeight] = useState("")

	function handleSetGrease(){
		setGreased(!greased)
		const newHogData = hogsData.filter(hog => {
			return hog.greased === !greased
		})
		greased ? setHogsData(hogs) : setHogsData(newHogData)
	}

	function handleNameChange(e){	
		setSearchName(e.target.value)
	}
	function handleWeightChange(e){	
		setSearchWeight(e.target.value)
	}

	const updateHogs = hogsData.filter(hog =>{
		if(searchName === "") return true
		return hog.name.toLowerCase().includes(searchName.toLowerCase())
	})
	const fullUpdateHogs = updateHogs.filter(hog =>{
		if(searchWeight === "") return true
		return hog.weight === searchWeight
	})



	return (
		<div className="App">
			<Nav />
			<Search
			handleNameChange={handleNameChange} 
			name={searchName}
			handleWeightChange={handleWeightChange}
			weight={searchWeight}
			/>
			<br/>
			<HogList 
			hogs={fullUpdateHogs} 
			greased={greased} 
			handleSetGrease={handleSetGrease}
			/>
		</div>
	);
}

export default App;

