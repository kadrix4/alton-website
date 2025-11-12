const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const Quote = require('./models/Quote');
const Contact = require('./models/Contact');

app.get('/', (req, res) => {
  res.json({ message: 'Alton Backend is running!' });
});

app.post('/api/quotes', async (req, res) => {
  try {
    const { service, details, email } = req.body;
    
    const newQuote = new Quote({
      service,
      details,
      email
    });
    
    await newQuote.save();
    console.log('Quote saved to DB:', newQuote);
    
    res.json({ success: true, message: 'Quote saved successfully!', data: newQuote });
  } catch (error) {
    console.error('Error saving quote:', error);
    res.status(500).json({ success: false, message: 'Error saving quote', error: error.message });
  }
});

app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json({ success: true, data: quotes });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ success: false, message: 'Error fetching quotes' });
  }
});

app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      message
    });
    
    await newContact.save();
    console.log('Contact saved to DB:', newContact);
    
    res.json({ success: true, message: 'Message sent successfully!', data: newContact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Error saving contact', error: error.message });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Error fetching contacts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});