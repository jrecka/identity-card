import app from '../server/app';
const router = app.router();

router.get('/', (request, response) => {
    response.render('home');
});

module.exports = router;