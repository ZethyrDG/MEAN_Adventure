module.exports = {
    getAll: function(request, response){
        Player.find({})
        .then(function(data){
            response.json(data)
        })
        .catch(function(err){
            response.json(err)
        })
    },
    getOne: function(request, response){
        Player.find({username: request.params.user})
        .then(function(data){
            response.json(data)
        })
        .catch(function(err){
            response.json(err)
        })
    },
    create: function(request, response){
        Player.create(request.body)
        .then(function(data){
            response.json(data)
        })
        .catch(function(err){
            response.json(err)
        })
    },
    update: function(request, response){
        Player.findByIdAndUpdate(request.params.id, request.body)
        .then(function(data){
            response.json(data)
        })
        .catch(function(err){
            response.json(err)
        })
    },
    delete: function(request, response){
        Player.deleteOne({_id: request.params.id})
        .then(function(data){
            response.json(data)
        })
        .catch(function(err){
            response.json(err)
        })
    },
}