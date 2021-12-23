import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

const PLANT_URL = "http://localhost:6001/plants/"
function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  // old style
  // const [state, setState] = useState({
  //   plants: [],
  //   setSearch: ""
  // })

  // const setOneState = (newState) => {
  //   setState({...state, newState})
  // }


  // when the component mounts
  useEffect(() => {
    getPlants()
  }, [])

  const getPlants = () => {
    fetch(PLANT_URL)
      .then((res) => res.json())
      .then((plants) => {
        console.log(plants)
        setPlants(plants)
        // setOneState(plants)
      })
  }

  const addPlant = (formData) => {
    const postObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }
    fetch(PLANT_URL, postObj)
      .then((res) => res.json())
      .then((newPlant) => {
        console.log(newPlant)
        // add the newPlant to our plant state
        setPlants([...plants, newPlant])
      })
  }

  const filteredPlants = () => {
    return plants.filter((plant) => {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  const deletePlant = (id) => {
    const deleteObj = {
      method: "DELETE",
    }
    fetch(PLANT_URL + id, deleteObj)
      // .then(res => res.json())
      .then(() => {
        // console.log(data)
        setPlants(plants.filter((p) => p.id !== id))
      })
  }

  const updatePlant = (id, price) => {
    const updateObj = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    }
    fetch(PLANT_URL + id, updateObj)
      .then((res) => res.json())
      .then((updatedPlant) => {
        console.log(updatedPlant)
        // make sure the frontend reflects the backend change
        const updatedPlants = plants.map((p) => {
          if (p.id === updatedPlant.id) {
            return updatedPlant
          } else {
            return p
          }
        })
        setPlants(updatedPlants)
      })
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} />
      {/* For the filter, dont' change the plant list, but instead change the array that you are passing down */}
      {/* if we have a search term? then pass down the filtered artray, else we pass the main array */}
      <PlantList
        plants={!!search ? filteredPlants() : plants}
        deletePlant={deletePlant}
        updatePlant={updatePlant}
      />
    </main>
  )
}

export default PlantPage
