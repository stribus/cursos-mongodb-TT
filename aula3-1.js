use petshop
db.pets.insert({nome:'billy',idade:3,tipo:'cachorro',proprietario:'mario'});
db.pets.insertMany([
    {nome:'mel',idade:2,tipo:'gato',proprietario:'maria'},
    {nome:'fido',idade:3,tipo:'cachorro',proprietario:'jose'},
    {nome:'chester',idade:3,tipo:'gato',proprietario:'carime'},
    {nome:'pity',idade:3,tipo:'cachorro',proprietario:'mario'}
    ]);

db.pets.find();
db.pets.find({proprietario:'mario'})

db.pets.find({idade:{$gt:2}})

db.pets.find({$or:[{idade:2},{idade:3} ]})
