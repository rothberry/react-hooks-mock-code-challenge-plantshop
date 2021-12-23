import React, { useState } from "react"

function PlantCard({
  plant: { id, name, image, price },
  deletePlant,
  updatePlant,
}) {
  const [inStock, setInStock] = useState(true)
  const [showEdit, setShowEdit] = useState(false)
  const [editPrice, setEditPrice] = useState(price)

  const toggleInStock = () => {
    setInStock(!inStock)
  }

  const toggleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleDelete = () => {
    console.log("...deleting")
    if (window.confirm("Are you sure you want to delete?") === true) {
      deletePlant(id)
    }
  }

  const handleUpdate = e => {
    if (price !== editPrice) {
      updatePlant(id, editPrice)
    }
    toggleEdit()
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>
        Price:{" "}
        {showEdit ? (
          <input
            name="price"
            type="number"
            step="0.01"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
        ) : (
          <span>{price}</span>
        )}
      </p>
      {inStock ? (
        <button className="primary" onClick={toggleInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
      {/* <button onClick={toggleInStock} className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out Of Stock"}
      </button> */}
      {showEdit ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={toggleEdit}>Edit </button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default PlantCard
