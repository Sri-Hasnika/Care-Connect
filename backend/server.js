const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const API_KEY = 'AIzaSyDNGlNmcXV2JwLq-h_Sxs-SpfIoob9vVWo';

app.post('/analyze-image', async (req, res) => {
    const { imageBase64 } = req.body;
  
    if (!imageBase64) {
      return res.status(400).json({ error: 'No image provided' });
    }
  
    try {
      const response = await axios.post(
        `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`,
        {
          requests: [
            {
              image: { content: imageBase64 },
              features: [{ type: 'LABEL_DETECTION', maxResults: 5 }],
            },
          ],
        }
      );
      res.json(response.data);
    } catch (error) {
      console.error('Error analyzing image:', error);  // Log the error details
      res.status(500).json({ error: 'Error analyzing image', details: error.message });
    }
  });
  

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
