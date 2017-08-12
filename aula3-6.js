var pet = db.pets.findOne({proprietario:'carime'})
pet.idade= 8
db.pets.save(pet)


db.pets.update(
db.pets.findOne({proprietario:'carime',idade:{$lt:4}},{_id:1})
,{nome:'urso',idade:5,tipo:'cachorro'})


db.pets.update(
    db.pets.findOne({nome:'urso',idade:5},{_id:1})
,{$set:{proprietario:'carime',tipo:'cachorro'}})


