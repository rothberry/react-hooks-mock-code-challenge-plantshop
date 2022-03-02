import React, { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
// import Input from "@mui/material/Input"
import FormControl from "@mui/material/FormControl"

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
			<FormControl onSubmit={handleSubmit}>
				<div>
					<TextField
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						label="Plant Name"
						required
						// placeholder="Plant name"
					/>
					<TextField
						name="image"
						label="Image URL"
						value={image}
						required
						// onChange={handleChange}
						onChange={(e) => setImage(e.target.value)}
					/>
					<TextField
						type="number"
						required
						name="price"
						step="0.01"
						label="Price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						// onChange={handleChange}
					/>
					<Button type="submit" variant="primary">
						Add Plant
					</Button>
				</div>
			</FormControl>
		</div>
	)
}

export default NewPlantForm
