var app = require('./config/express')();

app.get('/todolist', function(req, res){
  res.render("lista");
});

app.listen(3000, function(){
  console.log('Servidor Rodando');
});
