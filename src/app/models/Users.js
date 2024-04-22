// models/User.js - Example user model

import db from '../db';

const User = {
  findByEmail: (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
};

export default User;
 