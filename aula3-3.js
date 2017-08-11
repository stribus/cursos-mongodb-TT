db.pets.find({}).count()
db.pets.find().limit(2)
db.pets.find().skip(6).limit(2)
db.pets.find({},{nome:1,_id:0,proprietario:1}).sort({nome:1,proprietario:-1})

