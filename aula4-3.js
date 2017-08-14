db.cidade.insertMany([
{cidade:"São Paulo"},
{cidade:"So Paulo"},
{cidade:"sao Paulo"},
{cidade:"São PAULO"},
{cidade:"SAO paulo"},
])

db.cidade.createIndex({cidade:'text'},{default_language:"portuguese"})

db.cidade.find()