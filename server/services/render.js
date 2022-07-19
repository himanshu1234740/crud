const axios = require('axios');


exports.homeRoutes = (req,res) => {
    //make a get request to /api/user
    axios.get('http://localhost:3000/api/user')
        .then(function(response) {
            res.render('index', {user: response.data})
        })
        .catch(function(err) {
            res.send(err)
        })

}

exports.user = (req,res) => {
    axios.get('http://localhost:3000/api/user')
        .then(function(response) {
            res.render('user', {user: response.data})
        })
        .catch(function(err) {
            res.send(err)
        })
}

exports.update = (req,res) => {
    axios.get('http://localhost:3000/api/user',{params: {id: req.query.id}})
    .then(function(response) {
        res.render('update', {user: response.data})
    })
    .catch(function(err) {
        res.send(err)
    })
}