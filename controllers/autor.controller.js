const Autor = require('../models/autor.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.autor_all = function (req, res) {
        
    Autor.findOne({},function(err,autor){
        if (err) return next(err);
        res.send(autor);    
    })
    
};


exports.autor_create = function (req,res){
    let autor = new Autor({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    autor.save(function(err){
        if (err) {
            return next(err);
        }
        
        res.send('Autor Criado')
    })
}