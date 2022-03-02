import React from "react"
import PlantCard from "./PlantCard"
import { ImageList } from "@mui/material"

function PlantList({ plants, deletePlant, updatePlant }) {
	const mappedPlants = () => {
		return plants.map((plant) => {
			return (
				<PlantCard
					plant={plant}
					key={plant.id}
					deletePlant={deletePlant}
					updatePlant={updatePlant}
				/>
			)
		})
	}
	return (
		<ImageList cols={4} variant="quilted">
			{mappedPlants()}
		</ImageList>
	)
	// return <ul className="cards">{mappedPlants()}</ul>
}

export default PlantList
