const express = require('express');
const router = express.Router();
const Park = require('../models/parkModel');
const fs = require('fs');
const path = require('path');


// Endpoint to create a new park
router.post('/', async (req, res) => {
  try {
    const { name, clientId, address, description, home, facilities, events, map } = req.body;

    const newPark = new Park({
      name,
      clientId,
      address,
      description,
      home,
      facilities,
      events,
      map
    });

    const savedPark = await newPark.save();

    res.status(201).json(savedPark);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Define the endpoint to create a new park with pages' data from a JSON file
router.post('/create-park', async (req, res) => {
    try {
      // Get the data for the new park from the request body
      const { name, clientId, address, description } = req.body;
      
      // Load the data for all the pages from a JSON file
      
      const pagesDataPath = path.resolve(__dirname, 'pages-data.json');
      const pagesData = JSON.parse(fs.readFileSync(pagesDataPath, 'utf8'));      
      // Create a new park object with the received data
      const newPark = new Park({
        name,
        clientId,
        address,
        description,
        home: pagesData.home,
        facilities: pagesData.facilities,
        events: pagesData.events,
       
      });
  
      // Save the new park to the database
      const savedPark = await newPark.save();
  
      // Send a response with the saved park object
      res.status(201).json(savedPark);
    } catch (error) {
      // Send a response with the error message if there was an error
      res.status(500).json({ message: error.message });
    }
  });
  
// Define the endpoint to create a new park with pages' data from a JSON file
router.get('/create-park', async (req, res) => {
    try {
      
const pagesDataPath = path.resolve(__dirname, 'pages-data.json');
const pagesData = JSON.parse(fs.readFileSync(pagesDataPath, 'utf8'));

      // Load the data for all the pages from a JSON file
    
      
     
      res.status(201).json(pagesData.home);
    } catch (error) {
      // Send a response with the error message if there was an error
      res.status(500).json({ message: error.message });
    }
  });
  
 
module.exports = router;
