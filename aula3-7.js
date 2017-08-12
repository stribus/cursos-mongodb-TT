db.pets.aggregate({
    $match:{
        idade: 3
    }
})
db.pets.aggregate({
    $project:{
        nome:true,
        idade:true,
        _id:false
    }
})