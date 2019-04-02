const Autor = require('../models/autor.model');
const { body } = require('express-validator/check')

exports.validate = (method) => {
    switch (method) {
        case 'autor_create': {
         return [ 
            body('name', "userName doesn't exists").exists(),
            body('email', "userName doesn't exists").exists(),
            body('password', "userName doesn't exists").exists(),
           ]   
        }
      }
    }

const validationHandler = next => result => {
    if (result.isEmpty()) return
    if (!next)
      throw new Error(
        result.array().map(i => `'${i.param}' has ${i.msg}`).join(' ')
      )
  else
    return next(
      new Error(
       result.array().map(i => `'${i.param}' has ${i.msg}`).join('')
      )
    )
  }

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
exports.autor_create = (req, res, next) => {
    req
    .getValidationResult() // to get the result of above validate fn
    .then(validationHandler()) 
    .then(() => {
    
       let autor = new Autor({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
       autor.save()
       .then(() => {
           this.autor_all(req,res,next)
       })
       .catch((error) => {
            res.status(400).send(JSON.stringify(error));
        })
    })
    .catch((next) => {
         res.status(400).send(next);  
    })
    
}

exports.autor_delete = function(req,res){
    Autor.deleteMany({},
        function(err){
            if(err) return next(err);

            res.send("Deletados");
        }
        )
}


