require('dotenv').config();
const express = require('express');
const cors = require('cors');
const supabase = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => {
    res.status(200).json({ status: 'online', message: 'VidoeBooks API is running.' });
});

// Fetch Ebooks Route
app.get('/api/ebooks', async (req, res) => {
    try {
        const { data, error } = await supabase.from('ebooks').select('*');
        if (error) throw error;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Upload Ebook Route
app.post('/api/upload', async (req, res) => {
    const { title, language, content } = req.body;
    if (!title || !language || !content) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const { data, error } = await supabase
            .from('ebooks')
            .insert([{ title, language, content }]);

        if (error) throw error;
        res.status(201).json({ message: 'Ebook uploaded successfully!', data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
