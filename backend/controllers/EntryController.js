import Entry from '../models/Entry.js';

// TODO: remove entry details from json response

const EntryController = {

  // Fetches all entries for user
  getAllEntries: async (req, res) => {
    try {
      console.log('req.user:', req.user);
        const entry = await Entry.findAll({
          where: { user_id: req.user.id }
        });
    
        if (!entry) return res.status(404).json({ error: 'Entry not found' });
    
        res.status(200).json(entry);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

  // Fetches entry by id for user
  getEntryById: async (req, res) => {
    try {
        const entry = await Entry.findOne({
          where: {
            id: req.params.id,
            user_id: req.user.id
          }
        });
    
        if (!entry) return res.status(404).json({ error: 'Entry not found' });
    
        res.status(200).json(entry);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },

  // Creates new entry for user
  createEntry: async (req, res) => {
    try {
        const { subject, entry_date, content, mood, challenge, lesson, peak, pit, gratitude } = req.body;
        const user_id = req.user.id
    
        const newEntry = await Entry.create({ user_id, subject, entry_date, content, mood, challenge, lesson, peak, pit, gratitude });
        res.status(201).json(newEntry);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  },

  // Deletes entry at specified id for user
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