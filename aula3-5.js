db.pets.find().map(function(bixo){
    return bixo.nome
}).forEach(function(nome){
    print(nome)
})

