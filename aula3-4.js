var bixos = db.pets.find();
while( bixos.hasNext()){
    print(bixos.next());
}   
var animais = db.pets.find();
while( animais.hasNext()){
    print(tojson(animais.next()));
}

db.pets.find().forEach(function(bixo){
    print(tojson(bixo))
})

db.pets.find().map(function(bixo){
    print(bixo)
})