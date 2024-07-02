const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    const query = `INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)`;

    db.run(query, [name, email, subject, message], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Contact message saved successfully!', id: this.lastID });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
