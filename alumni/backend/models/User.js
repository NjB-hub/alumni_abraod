const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  IsAdmin: { type: Boolean, default: false }, 
});

  userSchema.pre('save', async function(next){
      try{
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(this.password, salt);
          this.password = hashedPassword;
          return next();
      } catch(error){
          next(error);
      }
  });

 
  

module.exports = mongoose.model('User', userSchema);