import React, { useEffect, useState } from "react"

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  useEffect(() => {
    console.log(name, image, price)
  })

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeImage = (e) => {
    setImage(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }
  return (
    <div className="new-plant-form" onSubmit={addPlant}>
      <h2>New Plant</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={changeName}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={changeImage}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={changePrice}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
