const express = require("express")
const router = express.Router()

// Item Modal
const Item = require("../../models/Items")
const { json } = require("body-parser")

// routes

// @route   GET api/items
// @desc    Get all items
// @access  public
router.get("/", (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then((items) => res.json(items))
})

// @route   POST api/itemsss
// @desc    Create an item
// @access  public
router.post("/", (req, res) => {
	const newItem = new Item({
		name: req.body.name,
	})

	newItem.save().then((item) => res.json(item))
})

// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  public
router.delete("/:id", (req, res) => {
	Item.findByIdAndDelete(req.params.id)
		.then(() => res.json({ success: true }))
		.catch((err) => res.status(404).json({ success: false }))
})

module.exports = router
