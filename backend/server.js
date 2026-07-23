require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { createClient } = require('@supabase/supabase-js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 1. Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env file");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// 2. Configure Multer Storage (Saves to local 'uploads' folder)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Ensure you have an 'uploads' folder in your backend directory!
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// 3. The Upload Route
app.post('/api/books/upload', upload.single('bookFile'), async (req, res) => {
  try {
    const title = req.body.title;
    const filePath = req.file.path; // The local path where the file was saved

    if (!req.file) {
      return res.status(400).json({ error: "No file provided." });
    }

    if (!title) {
       return res.status(400).json({ error: "Book title is required." });
    }

    // 4. Save metadata to Supabase 'books' table
    // Make sure you have a table named 'books' in Supabase with 'title' and 'file_path' columns
    const { data, error } = await supabase
      .from('books')
      .insert([
        { title: title, file_path: filePath }
      ])
      .select();

    if (error) {
      console.error("Supabase Database Error:", error);
      return res.status(500).json({ error: "Failed to save book details to the database." });
    }

    res.status(200).json({ 
      message: "File uploaded and saved to Supabase successfully", 
      path: filePath,
      book: data
    });

  } catch (error) {
    console.error("Server error during upload:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 4. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
