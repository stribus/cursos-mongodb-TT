db.cidade.insertMany([
{cidade:"S�o Paulo"},
{cidade:"So Paulo"},
{cidade:"sao Paulo"},
{cidade:"S�o PAULO"},
{cidade:"SAO paulo"},
])

db.cidade.createIndex({cidade:'text'},{default_language:"portuguese"})

db.cidade.find()