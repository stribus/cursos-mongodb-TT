db.pets.find({},{nome:true,_id:false})
db.pets.find({idade:{$gte:3},proprietario:{$regex:"^[^m]"}},{nome:true,_id:false,proprietario:true})
db.pets.find({nome:{$regex:"d"}},{nome:true,_id:false,tipo:true})
db.pets.find({nome:{$regex:"y$"}},{nome:true,_id:false})
//para case insencitive 
db.pets.find({tipo:/^CacHorrO$/i},{nome:true,_id:false,tipo:true})