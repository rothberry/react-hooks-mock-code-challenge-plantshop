import React, { useState } from "react"
import Button from "@mui/material/Button"
import { ImageListItem } from "@mui/material"
// # import { MyButton } from "./MyButton"

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

	const handleUpdate = (e) => {
		if (price !== editPrice) {
			updatePlant(id, editPrice)
		}
		toggleEdit()
	}

	return (
		<li className="card">
			<ImageListItem sx={{ width: 300, height: 300 }}>
				<img src={image} alt={name} />
			</ImageListItem>

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
					<Button variant="contained" onClick={toggleInStock} color="primary">
						In Stock
					</Button>
				) : (
					<Button onClick={toggleInStock} variant="outlined" color="error">
						Out of Stock
					</Button>
				)}
				{/* <button onClick={toggleInStock} className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out Of Stock"}
      </button> */}
				{showEdit ? (
					<Button onClick={handleUpdate}>Save</Button>
				) : (
					<Button onClick={toggleEdit}>Edit </Button>
				)}
				<Button onClick={handleDelete}>Delete</Button>
		</li>
	)
}

export default PlantCard
