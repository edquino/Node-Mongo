require('dotenv').config();
const app = require('./server');

app.listen(app.get('port'), ()=>{
    console.log('app-mongo on port:', app.get('port'));
});