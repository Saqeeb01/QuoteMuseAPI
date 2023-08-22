const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const Quote = require('./models/quotes'); // Adjust the path as needed

const uri = 'mongodb+srv://talikotisaqib257:xRS2j7JFU57wvpgq@quotemuseapi.mdmptds.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });


app.get('/', (req, res) => {
  const welcomeMessage = {
    message: 'Welcome to the Quote API!',
    endpoints: {
      allQuotes: '/quotes',
      movieQuotes: '/quotes/movies',
      bookQuotes: '/quotes/books'
    }
  };
  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(welcomeMessage, null, 2)); // The third argument (2) is for pretty-printing with 2 spaces indentation
});


// GET all quotes
app.get('/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find();
    console.log('Fetched quotes:', quotes);
    res.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ message: 'Error fetching quotes' });
  }
});

  
// GET random quote
app.get('/quotes/random', async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(randomIndex);
    res.json(randomQuote);
  } catch (error) {
    console.error('Error fetching random quote:', error);
    res.status(500).json({ message: 'Error fetching random quote' });
  }
});

// GET quotes containing a specific keyword
app.get('/quotes/search', async (req, res) => {
  const keyword = req.query.keyword;
  try {
    const quotes = await Quote.find({ text: { $regex: keyword, $options: 'i' } });
    res.json(quotes);
  } catch (error) {
    console.error('Error searching quotes:', error);
    res.status(500).json({ message: 'Error searching quotes' });
  }
});

// GET quotes from books
app.get('/quotes/books', async (req, res) => {
  try {
    const quotes = await Quote.find({ source: 'book' });
    res.json(quotes);
  } catch (error) {
    console.error('Error fetching book quotes:', error);
    res.status(500).json({ message: 'Error fetching book quotes' });
  }
});

// GET quotes from movies
app.get('/quotes/movies', async (req, res) => {
  try {
    const quotes = await Quote.find({ source: 'movie' });
    res.json(quotes);
  } catch (error) {
    console.error('Error fetching movie quotes:', error);
    res.status(500).json({ message: 'Error fetching movie quotes' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
