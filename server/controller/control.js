var Blog = require('../model/model');

exports.create = function (req, res) {
   if (!req.body) {
      res.status(404).send({ message: "contect an not be find" })
      return;
   }

   
   //console.log(req.body.password);
   //new users
   const users = new Blog({

      name: req.body.name,
      email: req.body.email,
      password: req.body.password
   })
   users
      .save(users).then(data => {
         res.redirect('/')
         
      })
      .catch(err => {
         res.status(500).send({ message: err.message || "something went wrong" })
      })
}

exports.find = function (req, res) {
   if (req.query.id) {
      const id = req.query.id;
      Blog.findById(id).then(data => {
         if (!data) res.status(404).send({ message: "data can not be empty" })
         else (
            res.send(data)
         )
      })
         .catch(err => res.status(500).send({ message: err.message || "err" }))
   } else {
      Blog.find()
         .then(users => {
            res.send(users)
         })
         .catch(err => {
            res.status(500).send({ message: err.message || "something went wrong" })
         })
   }
}


exports.update = (req, res)=>{
   if(!req.body){
       return res
           .status(400)
           .send({ message : "Data to update can not be empty"})
   }

   const id = req.params.id;
   console.log(req.body);
   Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
       .then(data => {
           if(!data){
               res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
           }else{
               res.send(data)
           }
       })
       .catch(err =>{
           res.status(500).send({ message : "Error Update user information"})
       })
}

exports.delete = function (req, res) {
   const id = req.params.id;
   console.log(id);

   Blog.findByIdAndRemove(id)

      .then(data => {
         if (!data) {
            res.status(404).send({ message: `cannot be delete this ${id}` })
         } else {
            res.send({ message: "delete successfully" })
         }
      })
      .catch(err => {
         res.status(500).send({ message: "error deleting" })
      })

}