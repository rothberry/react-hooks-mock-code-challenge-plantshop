import React, { useState } from "react"

function PlantCard({ name, image, price, updatePrice, id }) {
  const [inStock, setInStock] = useState(true)
  const [showPrice, setShowPrice] = useState(true)
  const [patchPrice, setPatchPrice] = useState(price)

  const toggleInStock = () => {
    setInStock(!inStock)
  }
  const toggleEdit = () => {
    setShowPrice(!showPrice)
  }

  const handlePatchPrice = (e) => {
    setPatchPrice(e.target.value)
  }

  const handleEditSubmit = e => {
    e.preventDefault()
    updatePrice(e.target.value, id)
    toggleEdit()
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>
        Price:{" "}
        {showPrice ? (
          <span onDoubleClick={toggleEdit}>{price}</span>
        ) : (
          <form onSubmit={handleEditSubmit}>
            <input
              onChange={handlePatchPrice}
              name="price"
              type="number"
              step="0.01"
              value={patchPrice}
            />
          </form>
        )}
      </p>
      {inStock ? (
        <button className="primary" onClick={toggleInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
