const express = require('express');
const app = express();
const path = require('path');


//settings server
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));


//listening server
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto: ', app.get('port'));
});