import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
   try{
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
         username,
         email,
         password: hashedPassword 
         });

         await newUser.save();
         res.status(201).json('user created successfully');
            
   } catch (error) {
       next(error);
       console.log(error);
   }
    
};

export const signin = async (req, res, next) => {
   const { email, password } = req.body;
   try {
      const validUser = await User.findOne({ email });
      if(!validUser) return next(errorHandler('User not Found', 404));
      const validPassword = await bcrypt.compare(password, validUser.password);
      if(!validPassword) return next(errorHandler('invalid credentials!', 401));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const { password: pass, ...rest } = validUser._doc;
      res.cookie('access_token', token, { httpOnly: true });
      res.status(200).json({ rest });
   } catch (error) {
      next(error);
   }
}