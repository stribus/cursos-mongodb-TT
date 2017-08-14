use teste
db.inventory.insertMany([
{_id:1,item:"ABC", Quantidade: 158, descricao:'produto 1'},
{_id:2,item:"abc2", Quantidade: 258, descricao:'produto 2'},
{_id:3,item:"ABc3", Quantidade: 3245464, descricao:'produto 1'},
{_id:4,item:"XYZ", Quantidade: 9548, descricao:'produto 2'}
])


db.inventory.aggregate([
{
    $project:{
        item:{$toUpper:"$item"},
        descricao:{$toUpper:"$descricao"}
        },
        
        
    }
])
    
db.inventory.find().forEach(function(doc){
    doc.item=doc.item.toUpperCase();
    db.inventory.save(doc);
    })    
    
    