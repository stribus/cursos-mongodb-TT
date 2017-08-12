var pet = db.pets.findOne({proprietario:'carime'})
pet.idade= 8
db.pets.save(pet)