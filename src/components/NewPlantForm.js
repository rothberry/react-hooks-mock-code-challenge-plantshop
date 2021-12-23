import React, { useState } from "react"

function NewPlantForm({ addPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  })

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formaDataObj = {
      name,
      image,
      price,
    }
    addPlant(formaDataObj)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          // onChange={handleChange}
          onChange={(e) => setName(e.target.value)}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          // onChange={handleChange}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          // onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
