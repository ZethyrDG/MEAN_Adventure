module.exports = {
    getAll: function(request, reponse){

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

    },
}