module.exports.cadastro =  function(application, req, res){
   res.render('cadastro', {validacao:{}, dadosForm:{}});
}

module.exports.cadastrar =  function(application, req, res){
    
    var dadosForm =  req.body;
    req.assert('nome', 'Nome não pode ser vazio!' ).notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio!' ).notEmpty();
    req.assert('casa', 'Casa não pode ser vazio!' ).notEmpty();

    var erros = req.validationErrors();

    if(erros){
        //res.send('existem erros no formulario');
        res.render('cadastro', {validacao:erros, dadosForm: dadosForm});
        return;
    }


     res.send('podemos cadatsrar...');
    



 }