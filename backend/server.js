const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Load event data from JSON files
const loadEventData = (eventId) => {
  const filePath = path.join(__dirname, 'data', `${eventId}.json`);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return null;
};

// GET /api/events - List all events
app.get('/api/events', (req, res) => {
  const dataDir = path.join(__dirname, 'data');
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  
  const events = files.map(file => {
    const data = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf8'));
    return {
      id: path.basename(file, '.json'),
      title: data.event.title,
      date: data.event.date,
      location: data.event.location
    };
  });
  
  res.json(events);
});

// GET /api/events/:eventId - Full event data
app.get('/api/events/:eventId', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(data);
});

// GET /api/events/:eventId/info - Event title, date, description, location
app.get('/api/events/:eventId/info', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json({
    title: data.event.title,
    date: data.event.date,
    location: data.event.location,
    description: data.event.description
  });
});

// GET /api/events/:eventId/introduction - Event introduction
app.get('/api/events/:eventId/introduction', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(data.introduction);
});

// GET /api/events/:eventId/agenda - Agenda items
app.get('/api/events/:eventId/agenda', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(data.agenda);
});

// GET /api/events/:eventId/speakers - Speakers (limited to 3)
app.get('/api/events/:eventId/speakers', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(data.speakers.slice(0, 3));
});

// GET /api/events/:eventId/detail - Event detail description
app.get('/api/events/:eventId/detail', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(data.eventDetail);
});

// GET /api/events/:eventId/previous-events - Previous events
app.get('/api/events/:eventId/previous-events', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(data.previousEvents);
});

// GET /api/events/:eventId/faq - FAQ section
app.get('/api/events/:eventId/faq', (req, res) => {
  const data = loadEventData(req.params.eventId);
  if (!data) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(data.faq);
});

app.listen(PORT, () => {
  console.log(`✓ API Server running on http://localhost:${PORT}`);
  console.log(`  Endpoints:`);
  console.log(`  - GET /api/events`);
  console.log(`  - GET /api/events/:eventId`);
  console.log(`  - GET /api/events/:eventId/info`);
  console.log(`  - GET /api/events/:eventId/introduction`);
  console.log(`  - GET /api/events/:eventId/agenda`);
  console.log(`  - GET /api/events/:eventId/speakers`);
  console.log(`  - GET /api/events/:eventId/detail`);
  console.log(`  - GET /api/events/:eventId/previous-events`);
  console.log(`  - GET /api/events/:eventId/faq`);
});
