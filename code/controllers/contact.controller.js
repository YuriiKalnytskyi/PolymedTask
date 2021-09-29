const db = require('../db/db');

module.exports = {
  contact: async (req, res, next) => {
    try {
      console.log(req.body);
      const { name, email, message } = req.body;

      const user = await db('new_table').insert({ name, email, message });
      res.json(user);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
};
