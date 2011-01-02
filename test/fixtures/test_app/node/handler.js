module.exports = function(app){
  app.get('/foo', function(req, res, next){
    res.writeHead(200);
    res.end("Hello World");
  });

  app.post('/session', function(req, res, next){
    req.session.test_string = 'Session Test';
    res.writeHead(200);
    res.end(req.session.test_string);
  });

  app.get('/i18n', function(req, res, next){
    res.writeHead(200);
    res.end(req.session.test_string);
  });

};