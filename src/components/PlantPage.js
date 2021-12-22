import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

const PLANT_URL = "http://localhost:6001/plants"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchPlants()
  }, [])

  const fetchPlants = () => {
    fetch(PLANT_URL)
      .then((res) => res.json())
      .then((plants) => {
        console.log(plants)
        setPlants(plants)
      })
  }

  const addPlant = (event) => {
    event.preventDefault()
    // debugger
    console.log("adding")
    const postReq = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: event.target.name.value,
        image: event.target.image.value,
        price: event.target.price.value,
      }),
    }
    fetch(PLANT_URL, postReq)
      .then((res) => res.json())
      .then((newPlant) => {
        console.log(newPlant)
        setPlants([...plants, newPlant])
      })
  }

  const filterPlants = () => {
    return plants.filter((plant) => {
      return plant.name.toLowerCase().includes(search)
    })
  }

  const updatePrice = (price, id) => {
    console.log("editing")
    const patchReq = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: price,
      }),
    }
    fetch(PLANT_URL + "/" + id, patchReq)
      .then((res) => res.json())
      .then((plant) => {
        console.log(plant)
        debugger
      })
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} />
      <PlantList
        plants={!!search ? filterPlants() : plants}
        updatePrice={updatePrice}
      />
    </main>
  )
}

export default PlantPage
