db.inventory.createIndex({item:"text", descricao:"text"})


db.inventory.getIndexes()

db.inventory.find({$text:{$search:"produto"}})

