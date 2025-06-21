import Entry from '../models/Entry.js';

const EntryController = {

  // Fetches all entries
  getAllEntries: async (req, res) => {
    try {
        const entry = await Entry.findAll();
    
        if (!entry) return res.status(404).json({ error: 'Entry not found' });
    
        res.status(200).json();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

  // Fetches entry by id
  getEntryById: async (req, res) => {
    try {
        const id = req.params.id;
        const entry = await Entry.findByPk(id);
    
        if (!entry) return res.status(404).json({ error: 'Entry not found' });
    
        res.status(200).json();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },

  // Creates new entry
  createEntry: async (req, res) => {
    try {
        const { subject, date, content, mood, challenge, lesson, peak, pit, gratitude } = req.body;
    
        const newEntry = await Entry.create({ subject, date, content, mood, challenge, lesson, peak, pit, gratitude });
        res.status(201).json();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },

  // Deletes entry at specified id
  deleteEntryById: async (req, res) => {
    try {
      await Entry.destroy({
        where: {
          id: req.params.id
        },
      });
      res.status(200).json();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

};

export default EntryController;