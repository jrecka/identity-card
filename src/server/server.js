 const app = require('./main');
app.set('port',  process.env.PORT || 4000 );
const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${server.address().port}`)});