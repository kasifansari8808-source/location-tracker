const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

// Public folder se HTML file serve karna
app.use(express.static(path.join(__dirname, 'public')));

// Jab user location bhejega, ye route chalega
app.post('/save-location', (req, res) => {
    const { lat, lng, timestamp } = req.body;

    console.log(`----------------------------------------`);
    console.log(`📍 Nayi Location Mili!`);
    console.log(`Latitude: ${lat}`);
    console.log(`Longitude: ${lng}`);
    console.log(`Google Maps Link: https://www.google.com/maps?q=${lat},${lng}`);
    console.log(`Time: ${timestamp}`);
    console.log(`----------------------------------------`);

    res.status(200).json({ success: true, message: 'Location received successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
