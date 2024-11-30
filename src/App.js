const express = require('express');
const path = require('path');
const { getChecklistResults } = require('./controllers/checklistController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/checklist', getChecklistResults);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
