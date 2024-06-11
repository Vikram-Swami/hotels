const express = require('express');
const Person = require('./../models/person');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await Person.find();
    console.log('data fatched');
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const data = req.body;
    const response = await Person.findByIdAndUpdate(personId, data, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: 'data not found' });
    }
    console.log('data update successfully');
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    console.log('data delete successfully');
    res.status(200).json({ message: 'data delete successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
    console.log(err);
  }
});

module.exports = router;
