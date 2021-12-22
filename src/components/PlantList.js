import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ plants, updatePrice }) {
  const mappedPlants = () => {
    return plants.map(({ name, image, price, id }) => {
      return (
        <PlantCard
          name={name}
          image={image}
          price={price}
          key={id}
          id={id}
          updatePrice={updatePrice}
        />
      )
    })
  }
  return <ul className="cards">{mappedPlants()}</ul>
}

export default PlantList
