const app = require('./main');

app.set('port', process.env.PORT || 4200);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ server.address().port }`);
});