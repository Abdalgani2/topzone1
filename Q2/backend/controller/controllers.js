const User = require('../models/users')
const bcrypt = require("bcrypt");
 const emailvalidator = require("email-validator");

exports.signUp = (req, res) => {
  console.log("wseel");
  const { name, country, email, password } = req.body;
  User.findOne({ email: email })
    .then(findUser => {
      if (findUser) {
        res.send("already the email use ");
        return;
      }
      else if (!emailvalidator.validate(req.body.email)) {
        res.status(202).send("The email not validate : exam@gmail.com ");
        return;
      }
      return bcrypt
        .hash(password, 10)
        .then(hashedPassword => {
          const user = new User({
            name: name,
            country: country,
            email: email,
            password: hashedPassword,

          });
          user.save().then((newUser) => {
            res.status(201).send(newUser);

          });
        }).catch((err) => {
          return err;
        })
    });
}
exports.signIn = (req,res)=>{
  console.log("login");
  const { email, password } = req.body;
  User.findOne({ email: email })
  .then(findUser => {
    if(!findUser){
      res.status(401).send('email not connected to any user');
      return;
    }
   bcrypt
   .compare(password, findUser.password)
   .then(doMatch=>{
    if(doMatch){
      res.status(200).json({ userId: findUser.id, email: findUser.email, })
    }
    else{
      return res.status(401).send('email not connected to any user');

    }
   }); 
  })

}