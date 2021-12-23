import React from "react"
import PlantCard from "./PlantCard"

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
  return <ul className="cards">{mappedPlants()}</ul>
}

export default PlantList
