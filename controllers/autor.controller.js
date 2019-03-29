const Autor = require('../models/autor.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.autor_all = function (req, res) {
   
    Autor.find({},function(err,autores){
        let lista = [];
        autores.forEach(autor => {
            let obj = {
                id: autor._id,
                name: autor.name,
                email: autor.email
            }
            lista.push(obj)
        });
        if (err) {return next(err);}
        res.send(lista);    
    })  
};

exports.autor_create = function (req,res){
    let autor = new Autor({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    autor.save(function(err){
        
        Autor.find({},function(err,autores){
            let lista = [];
            autores.forEach(autor => {
                let obj = {
                    id: autor._id,
                    name: autor.name,
                    email: autor.email
                }
                lista.push(obj)
            });
            if (err) return next(err);

            res.send(lista);        
        }) 
    });
}

exports.autor_delete = function(req,res){
    Autor.deleteMany({},
        function(err){
            if(err) return next(err);

            res.send("Deletados");
        }
        )
}


