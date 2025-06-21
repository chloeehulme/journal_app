import User from '../models/User.js';

// TODO: remove user details from json response

const UserController = {

    // Creates user
    signUp: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            const exists = await User.findOne({ where: { username } });
            if (exists) return res.status(403).json({ error: 'Username already exists' });

            const user = await User.create({ username, email, password });
            res.status(201).json({ message: user});
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Logs user in
    login: async (req, res) => {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const validPassword = await user.validatePassword(password);
        if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

        //const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

        //res.json({ token });

        res.status(200).json({message: "User logged in"});
    },

    // Fetches all entries
    getAllUsers: async (req, res) => {
    try {
        const user = await User.findAll();
    
        if (!user) return res.status(404).json({ error: 'Entry not found' });
    
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },

};

export default UserController;