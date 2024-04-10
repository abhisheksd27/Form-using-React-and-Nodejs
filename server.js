

const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;


app.use(cors());


app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, email, phone } = req.body;
  console.log('Form data:', { name, email, phone });
  res.status(200).json({ message: 'Form submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 